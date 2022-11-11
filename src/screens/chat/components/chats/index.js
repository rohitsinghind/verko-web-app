import React, { useEffect, useState } from 'react'
import { styles } from './styles';

import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import { IconSend } from '@tabler/icons';
import ChatItem from './chatItem';
import { Paper } from '@mui/material';
import InfiniteSpace from "components/infiniteScroll";
import { ADD_LAST_MESSAGE_AND_SORT, SOCKET_EVENT_ACK } from 'utils/chatUtils';

export default function Chats({ currentUser, chats = [], setSelectedItem, onLoadMore, loading, socket }) {

  const [achat, setAChat] = useState([]);

  useEffect(() => {
    setAChat(chats);
  }, [chats])

  useEffect(() => {
    const messageListener = data => {
      ADD_LAST_MESSAGE_AND_SORT(achat, data);
    };

    const messageSentListener = data => {
      ADD_LAST_MESSAGE_AND_SORT(achat, data);
    };

    if (socket?.connected) {
      socket.on(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket.on(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    }
    return () => {
      socket?.off(SOCKET_EVENT_ACK.MESSAGE_ACK, messageListener);
      socket?.off(SOCKET_EVENT_ACK.SENT_ACK, messageSentListener);
    };
  }, [achat, socket]);


  return (
    <Paper sx={styles.main} id='chat'>
      <InfiniteSpace
        loading={loading}
        scrollableTarget={'chat'}
        dataLength={Array.isArray(achat) ? achat.length : 0}
        onLoadMore={onLoadMore}
        childern={
          Array.isArray(achat) && achat.length > 0 ? achat?.map((chat) => {
            return (
              <ChatItem
                key={chat._id}
                chatID={chat._id}
                users={chat.users}
                lastMessage={chat.lastMessage}
                user={currentUser}
                onClick={(data) => setSelectedItem({ ...data, _id: chat._id })}
                socket={socket}
              />
            );
          }) :
            <Box sx={styles.placeholder}>
              <IconSend
                size={40}
                color={'gray'}
              />
              <Typography color={'gray'} variant='h4' >No chats found</Typography>
            </Box>
        }
      />
    </Paper>
  )
}
