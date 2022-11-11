import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import Toolbar from "../../components/toolbar";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CHATS_START } from "store/actions";
import Chats from "./components/chats";
import Conversation from "./components/conversation";
import { SOCKET_EVENT } from "utils/chatUtils";
import { connect } from 'socket.io-client';
import Env from '../../env.json';

const LIMIT = 21;
export default function Chat() {

  const [socket, setSocket] = useState(null);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.chatReducer.chatsLoading);
  const chats = useSelector((state) => state.chatReducer.chats);
  const chatCount = useSelector((state) => state.chatReducer.chatCount);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: CHATS_START,
      params: {
        pageNo: page,
        limit: LIMIT,
      }
    });
  }, [dispatch]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  const onLoadMore = () => {
    if (!loading) {
      if (page && chatCount > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }

  useEffect(() => {
    const newSocket = connect(Env.ROOT);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  useEffect(() => {
    if (socket?.connected && currentUser?.userID) {
      socket.emit(SOCKET_EVENT.JOIN_ALL, JSON.stringify({ userID: currentUser.userID }));
    }
  }, [currentUser.userID, socket, socket?.connected]);

  return (
    <>
      <Toolbar loading={loading} />
      <Paper sx={styles.paper}>
        <Paper sx={styles.innerPaper}>
          <Chats
            currentUser={currentUser}
            chats={chats}
            loading={loading}
            setSelectedItem={setSelectedItem}
            onLoadMore={onLoadMore}
            socket={socket}
          />
          <Conversation key={selectedItem?._id} currentUser={currentUser}
            selectedItem={selectedItem} chatID={selectedItem?._id}
            socket={socket}
          />
        </Paper>
      </Paper>
    </>
  );
}
