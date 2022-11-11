import React, { useState, useEffect, useCallback } from 'react'
import { styles } from './styles';

import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import { IconMessageCircle2 } from '@tabler/icons';
import { Box } from '@mui/system';
import CommentItem from '../commentItem';
import { useDispatch, useSelector } from 'react-redux';
import { DISCUSSION_COMMENTS_START } from 'store/actions';

const LIMIT = 5;
export default function Comments({ discussionID, currentUser, commentCount }) {

  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.discussionReducer.discussionCommentsLoading);
  const comments = useSelector((state) => state.discussionReducer.discussionComments);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: DISCUSSION_COMMENTS_START,
      params: {
        pageNo: page,
        limit: LIMIT,
        sourceID: discussionID,
      }
    });
  }, [dispatch, discussionID]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  const onLoadMore = () => {
    if (!loading && Array.isArray(comments) && comments.length > 0) {
      if (page && commentCount > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }


  return (
    <Card sx={styles.main}>
      <CardContent
        sx={styles.content}
      >
        {Array.isArray(comments) && comments.length > 0 && comments[0].sourceID == discussionID ? comments?.map((c) => {
          return (
            <CommentItem
              key={c._id}
              comment={c}
              currentUser={currentUser}
            />
          );
        }) :
          <Box sx={styles.placeholder}>
            <IconMessageCircle2
              size={18}
              color={'gray'}
            />
            <Typography color={'gray'} variant='h6' >No comments.</Typography>
          </Box>
        }
        {page && Array.isArray(comments) && comments.length > 0 && comments[0].sourceID == discussionID &&
          commentCount > LIMIT * page ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <CircularProgress
            color="inherit"
            size={loading ? 20 : 0}
          />
          <Button onClick={onLoadMore}>Load More...</Button>
        </Box> : null}
      </CardContent>
    </Card>

  )
}
