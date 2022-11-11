import React, { useCallback, useState, useEffect } from 'react'
import { styles } from './styles';


import Box from '@mui/material/Box';
import DiscussionItem from './components/discussionItem'
import { Paper, Typography } from '@mui/material';
import InfiniteSpace from 'components/infiniteScroll';
import { IconMessageCircle2 } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { USER_DISCUSSIONS_START } from 'store/actions';

const LIMIT = 10;
export default function Discussions({ userID, currentUser }) {
  const [page, setPage] = useState(1);
  const [expanded, setexpanded] = useState(null);

  const loading = useSelector((state) => state.discussionReducer.userDiscussionLoading);
  const discussions = useSelector((state) => state.discussionReducer.userDiscussions);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: USER_DISCUSSIONS_START,
      params: {
        userID,
        pageNo: page,
        limit: LIMIT,
      }
    });
  }, [dispatch, userID]);

  useEffect(() => {
    getData(page);
  }, [getData, page]);

  const onLoadMore = () => {
    if (!loading && Array.isArray(discussions) && discussions.length > 0) {
      const count = discussions[0].count;
      if (page && count > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }
  return (
    <>
      <Paper key={userID} sx={styles.box} id="scrollableDiv">
        <InfiniteSpace
          loading={loading}
          scrollableTarget={'scrollableDiv'}
          dataLength={Array.isArray(discussions) ? discussions.length : 0}
          onLoadMore={onLoadMore}
          childern={
            Array.isArray(discussions) && discussions.length > 0 ? discussions?.map((discussion) => {
              return (
                <DiscussionItem
                  key={discussion._id}
                  currentUser={currentUser}
                  discussion={discussion}
                  expanded={expanded}
                  setexpanded={setexpanded}
                />
              );
            }) :
              <Box sx={styles.placeholder}>
                <IconMessageCircle2
                  size={40}
                  color={'gray'}
                />
                <Typography color={'gray'} variant='h4' >No discussion in your area.</Typography>
              </Box>
          }
        />
      </Paper>
    </>
  )
}
