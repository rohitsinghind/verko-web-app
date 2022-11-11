import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import ImageList from '@mui/material/ImageList';
import Toolbar from "../../components/toolbar";
import { Fab, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NOT_LIKED_POSTS_START, TEST_REACT_START } from "store/actions";
import PostItem from "./comonents/postItem";
import InfiniteSpace from "components/infiniteScroll";
import { Box } from "@mui/system";
import { Favorite } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { IconLayoutDashboard } from "@tabler/icons";

export default function NotLikedPosts() {
  const { enqueueSnackbar } = useSnackbar();

  const [rPosts, setRPosts] = useState([]);
  const [likeLoading, setLikeLoading] = useState(false);
  const [likeStarted, setLikeStarted] = useState(false);
  const loading = useSelector((state) => state.postReducer.unlikedPostsLoading);
  const posts = useSelector((state) => state.postReducer.unlikedPosts);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: NOT_LIKED_POSTS_START,
    });
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setRPosts(posts);
  }, [posts])



  const onReact = useCallback((postID) => {
    setLikeLoading(true);
    dispatch({
      type: TEST_REACT_START,
      params: {
        postID
      },
      callBack: (err, suc) => {
        if (suc) {
          const filter = rPosts.filter(({ _id }) => postID !== _id);
          if (filter.length > 0) {
            enqueueSnackbar('Liked', { variant: 'success' });
            setLikeStarted(true);
            setRPosts(filter);
          } else {
            enqueueSnackbar('Completed', { variant: 'success' });
            setLikeStarted(false);
            getData();
          }
          setLikeLoading(false);
        } else {
          setLikeStarted(false);
          setLikeLoading(false);
        }
      }
    });

  }, [dispatch, enqueueSnackbar, getData, rPosts])

  useEffect(() => {
    if (likeStarted && !likeLoading && rPosts.length > 0) {
      setTimeout(() => {
        onReact(rPosts[0]._id)
      }, 500);
    } else {

    }
  }, [likeLoading, likeStarted, onReact, rPosts])


  return (
    <>
      <Toolbar loading={loading} />
      <Paper sx={styles.paper} id="scrollableDiv">
        <Paper sx={styles.innerPaper}>
          {Array.isArray(rPosts) && rPosts.length > 0 ? <InfiniteSpace
            loading={loading}
            scrollableTarget={'scrollableDiv'}
            dataLength={Array.isArray(rPosts) ? rPosts.length : 0}
            onLoadMore={() => { }}
            childern={
              <ImageList cols={3}>
                {rPosts.map((item, index) => (
                  <PostItem
                    index={index}
                    key={`${item._id}-${index}`}
                    item={item}
                  />
                ))}
              </ImageList>
            }
          /> : <Box sx={styles.placeHolder} >
            <IconLayoutDashboard
              size={40}
              color={'gray'}
            />
            <Typography color={'gray'} variant='h4'>NO POST FOUND!</Typography>
          </Box>}
        </Paper>
        <Box sx={{ position: 'absolute', top: '10%', right: '20%' }}>
          <Fab color="primary" variant="extended" onClick={() => {
            if (!likeLoading && !loading && rPosts.length > 0) {
              onReact(rPosts[0]._id)
            }
          }}>
            <Favorite sx={{ mr: 1 }} />
            Like All Post
          </Fab>
        </Box>
      </Paper>
    </>
  );
}
