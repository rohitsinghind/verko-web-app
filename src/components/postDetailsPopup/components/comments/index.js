import React, { useState, useEffect, useCallback } from 'react'
import { styles } from './styles';
import Moment from 'react-moment';

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { POST_COMMENTS_START } from 'store/actions';
import { IconMessageCircle2 } from '@tabler/icons';
import { Button, CircularProgress } from '@mui/material';

const LIMIT = 20;

export default function Comment({ postID, commentCount }) {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.postReducer.postCommentsLoading);
  const postComments = useSelector((state) => state.postReducer.postComments);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: POST_COMMENTS_START,
      params: {
        pageNo: page,
        limit: LIMIT,
        postID: postID,
      }
    });
  }, [dispatch, postID]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  const onLoadMore = () => {
    if (!loading && Array.isArray(postComments) && postComments.length > 0) {
      if (page && commentCount > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }
  return (
    <Box sx={styles.main} id="scrollableDiv">
      {Array.isArray(postComments) && postComments.length > 0 && postID === postComments[0].postID ?
        postComments?.map((e) => {
          return (
            <Box key={e._id} style={styles.userDetails}>
              <Stack direction={'row'} spacing={2}>
                <Avatar
                  alt="avatar"
                  src={currentUser.userID === e.userID ? currentUser.image : e?.userID?.image || ''}
                />
                <div>
                  <Typography >
                    {currentUser.userID === e.userID ? 'You' : `${e.userID?.firstName || ''} ${e.userID?.lastName || ''} ${e.userID?.professionID?.name ? `  | ${e.userID?.professionID?.name}` : ''}`}
                  </Typography>
                  <Typography >
                    {e.text}
                  </Typography>
                </div>
              </Stack>
              <Typography
                component="div"
                sx={styles.date}
              >
                <Moment fromNow>{e.createdAt}</Moment>
              </Typography>
            </Box>
          );
        })
        :
        <Box sx={styles.nocomments}>
          <IconMessageCircle2 color='gray' size={40} />
          <Typography>
            No comments
          </Typography>
        </Box>
      }
      {page && Array.isArray(postComments) && postComments.length > 0 && postComments[0].postID == postID &&
        commentCount > LIMIT * page ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <CircularProgress
          color="inherit"
          size={loading ? 20 : 0}
        />
        <Button onClick={onLoadMore}>Load More...</Button>
      </Box> : null}
    </Box>
  )
}
