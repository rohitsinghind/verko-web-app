import React, { useState, useCallback, useEffect } from 'react'
import { styles } from './styles';
import { Box } from '@mui/system';
import { IconMessages, IconSend } from '@tabler/icons';
import { Avatar, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { MESSAGES_START } from 'store/actions';
import RightItem from './rightItem';
import LeftItem from './leftItem';
import { Paper } from '@mui/material';
import InfiniteSpace from "components/infiniteScroll";
import { SOCKET_EVENT, SOCKET_EVENT_ACK } from 'utils/chatUtils';

const LIMIT = 10;
export default function Conversation({ currentUser, selectedItem = {}, chatID = '', socket }) {

  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.chatReducer.messageLoading);
  const allMessages = useSelector((state) => state.chatReducer.messages);
  const messagesCount = useSelector((state) => state.chatReducer.messagesCount);
  const [messages, setMesages] = useState([]);

  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const getData = useCallback((chatID, page) => {
    dispatch({
      type: MESSAGES_START,
      params: {
        conversationID: chatID,
        pageNo: page,
        limit: LIMIT,
      }
    });
  }, [dispatch]);

  useEffect(() => {
    setMesages(allMessages);
  }, [allMessages]);

  useEffect(() => {
    getData(chatID, 1);
    setPage(1);
  }, [getData, chatID]);

  const onLoadMore = () => {
    if (!loading) {
      if (page && messagesCount > LIMIT * page) {
        setPage(page + 1);
        getData(chatID, page + 1)
      }
    }
  }

  const onSend = useCallback(() => {
    if (socket?.connected && message) {
      const newm = {
        conversationID: chatID,
        user: currentUser.userID,
        text: message,
        type: 0,
        tempID: Math.floor(Math.random() * 899999999 + 100000000),
      }
      const data = JSON.stringify({
        chatID,
        userName: `${currentUser.firstName} ${currentUser.lastName}`,
        message: newm,
      })
      socket.emit(SOCKET_EVENT.MESSAGE, data);
      setMesages([{
        ...newm, user: {
          _id: currentUser.userID,
        }
      }, ...messages])
      setMessage('')
    }
  }, [chatID, currentUser.firstName, currentUser.lastName, currentUser.userID, message, messages, socket]);

  useEffect(() => {
    const messageListener = data => {
      if (data.conversationID === chatID) {
        //setmessages
        if (data?.user?._id !== currentUser.userID) {
          const newData = JSON.stringify({
            chatID: chatID,
            messageID: data?._id,
            userID: currentUser.userID,
          })
          socket.emit(SOCKET_EVENT.READ, newData);
        }
      }
    };

    const messageSentListener = data => {
      if (data?.sent && data?.conversationID === chatID) {
        const newState = messages.map(obj =>
          obj.tempID === data.tempID
            ? { ...obj, sent: true, pending: false, _id: data?._id }
            : obj,
        );
        setMesages(newState);
      }
    };

    if (socket?.connected && currentUser?.userID && chatID) {
      socket.on(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket.on(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    }
    return () => {
      socket?.off(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket?.off(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    };
  }, [chatID, currentUser.userID, messages, socket]);


  useEffect(() => {
    if (socket?.connected && currentUser?.userID && chatID) {
      const data = JSON.stringify({
        chatID: chatID,
        userID: currentUser.userID,
      })
      socket.emit(SOCKET_EVENT.JOIN_CHAT, data);
    }
  }, [chatID, currentUser.userID, socket, socket?.connected]);

  return (
    <>
      {selectedItem?._id ?
        <Box sx={styles.conversationBox} >
          <Stack
            direction="row"
            sx={styles.header}
            spacing={2}
          >
            <Avatar
              alt="avatar"
              src={selectedItem.image || ''}
            />
            <Stack >
              <Stack direction={'row'} sx={styles.name}>
                <Typography variant='h5'>
                  {selectedItem.name}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Paper sx={styles.mainMessages} id='messages'>
            <InfiniteSpace
              loading={loading}
              inverse
              style={{ display: 'flex', flexDirection: 'column-reverse' }}
              scrollableTarget={'messages'}
              dataLength={Array.isArray(messages) ? messages.length : 0}
              onLoadMore={onLoadMore}
              childern={
                Array.isArray(messages) && messages.length > 0 ? messages.map((msg) => {
                  if (currentUser.userID == msg.user._id) {
                    return <RightItem msg={msg} />
                  } else {
                    return <LeftItem msg={msg} />
                  }
                }) : <IconMessages
                  size={40}
                  color={'gray'}
                />
              }
            />
          </Paper>

          <Stack
            direction="row"
            sx={styles.commentInputBox}
          >
            <TextField
              InputProps={{ disableUnderline: true }}
              sx={styles.commentInput}
              variant="standard"
              placeholder="Type message here..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <IconButton onClick={onSend}>
              <IconSend
                size={24}
                color={'#00abfb'}
              />
            </IconButton>
          </Stack>
        </Box> :
        <Box sx={styles.placeHolder} >
          <IconMessages
            size={40}
            color={'gray'}
          />
          <Typography color={'gray'} variant='h4'>Send private messages to Home owner and professionals</Typography>
        </Box>}
    </>

  )
}
