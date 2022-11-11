import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import Moment from 'react-moment';

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import { SOCKET_EVENT_ACK } from 'utils/chatUtils';

export default function ChatItem({ users = [], lastMessage = {}, user, onClick, socket, chatID }) {

  const [data, setData] = useState({});

  useEffect(() => {
    const otherUser = users.find((u) => u._id !== user.userID);
    const message = `${lastMessage.user == user.userID ? 'You : ' : ''}${lastMessage.text}`;
    const createdAt = lastMessage.createdAt;
    setData({
      name: `${otherUser?.firstName || 'N/A'} ${otherUser?.lastName || ''}`,
      createdAt,
      message,
      image: otherUser?.image,
    })

  }, [lastMessage.createdAt, lastMessage.text, lastMessage.user, user.userID, users])

  useEffect(() => {
    const messageListener = data => {
      console.log('dsd', data)
      if (data.conversationID === chatID) {
        const otherUser = users.find((u) => u._id !== user.userID);
        const message = `${data.user._id == user.userID ? 'You : ' : ''}${data.text}`;
        const createdAt = data.createdAt;
        setData({
          name: `${otherUser?.firstName || 'N/A'} ${otherUser?.lastName || ''}`,
          createdAt,
          message,
          image: otherUser.image,
        })
      }
    };

    const messageSentListener = data => {
      if (data?.sent && data?.conversationID === chatID) {
        const otherUser = users.find((u) => u._id !== user.userID);
        const message = `${data.user._id == user.userID ? 'You : ' : ''}${data.text}`;
        const createdAt = data.createdAt;
        setData({
          name: `${otherUser?.firstName || 'N/A'} ${otherUser?.lastName || ''}`,
          createdAt,
          message,
          image: otherUser.image,
        })
      }
    };

    if (socket?.connected && chatID) {
      socket.on(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket.on(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    }
    return () => {
      socket?.off(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket?.off(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    };
  }, [chatID, socket, user.userID, users]);


  return (
    <>
      <Box style={styles.userDetails} onClick={() => onClick(data)}>
        <Stack direction={'row'} spacing={2}>
          <Avatar
            alt="avatar"
            src={data.image || ''}
          />
          <Stack >
            <Stack direction={'row'} sx={styles.name}>
              <Typography variant='h5'>
                {data.name}・
              </Typography>
              <Typography
                component="div"
                sx={styles.date}
              >
                <Moment fromNow>{data.createdAt}</Moment>
              </Typography>
            </Stack>
            <Box
              fontSize="h5.fontSize"
              component="div"
              overflow="hidden"
              whiteSpace="pre-line"
              textOverflow="ellipsis"
              height={20}
            >
              {data.message}
            </Box>
          </Stack>
        </Stack>

      </Box>
      <Divider />
    </>

  )
}
