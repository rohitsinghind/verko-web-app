import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import ImageList from '@mui/material/ImageList';
import Toolbar from "../../components/toolbar";
import { Fab, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NOT_FOLLOWED_USERS_START, TEST_FOLLOW_START } from "store/actions";
import UserItem from "./comonents/userItem";
import InfiniteSpace from "components/infiniteScroll";
import { useSnackbar } from "notistack";
import { Box } from "@mui/system";
import { IconUserCheck } from "@tabler/icons";

export default function NotFollowedUsers() {
  const { enqueueSnackbar } = useSnackbar();
  const [rUsers, setRUsers] = useState([]);

  const [followLoading, setFollowLoading] = useState(false);
  const [followStarted, setFollowStarted] = useState(false);

  const loading = useSelector((state) => state.profileReducer.notFollowedUsersLoading);
  const users = useSelector((state) => state.profileReducer.notFollowedUsers);

  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch({
      type: NOT_FOLLOWED_USERS_START
    });
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setRUsers(users);
  }, [users])



  const onFollow = useCallback((userID) => {
    setFollowLoading(true);
    dispatch({
      type: TEST_FOLLOW_START,
      params: {
        userID
      },
      callBack: (err, suc) => {
        if (suc) {
          const filter = rUsers.filter(({ _id }) => userID !== _id);
          if (filter.length > 0) {
            enqueueSnackbar('Followed', { variant: 'success' });
            setFollowStarted(true);
            setRUsers(filter);
          } else {
            enqueueSnackbar('Completed', { variant: 'success' });
            setFollowStarted(false);
            getData();
          }
          setFollowLoading(false);
        } else {
          setFollowStarted(false);
          setFollowLoading(false);
        }
      }
    });

  }, [dispatch, enqueueSnackbar, getData, rUsers])

  useEffect(() => {
    if (followStarted && !followLoading && rUsers.length > 0) {
      setTimeout(() => {
        onFollow(rUsers[0]._id)
      }, 500);
    } else {

    }
  }, [followLoading, followStarted, onFollow, rUsers])





  return (
    <>
      <Toolbar loading={loading} />
      <Paper sx={styles.paper} id="scrollableDiv">
        <Paper sx={styles.innerPaper}>
          {Array.isArray(rUsers) ? <InfiniteSpace
            loading={loading}
            scrollableTarget={'scrollableDiv'}
            dataLength={Array.isArray(rUsers) ? rUsers.length : 0}
            onLoadMore={() => { }}
            childern={
              <ImageList cols={3}>
                {rUsers.map((item, index) => (
                  <UserItem
                    index={index}
                    key={`${item._id}-${index}`}
                    item={item}
                  />
                ))}
              </ImageList>
            }
          /> : null}
        </Paper>

        <Box sx={{ position: 'absolute', top: '10%', right: '20%' }}>
          <Fab color="primary" variant="extended" onClick={() => {
            if (!followLoading && !loading && rUsers.length > 0) {
              onFollow(rUsers[0]._id)
            }
          }}>
            <IconUserCheck sx={{ mr: 1 }} />
            Follow All Users
          </Fab>
        </Box>
      </Paper>
    </>
  );
}
