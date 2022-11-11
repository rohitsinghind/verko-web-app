import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import Toolbar from "../../components/toolbar";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DISCUSSIONS_START } from "store/actions";
import DiscussionItem from "./components/discussionItem";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';
import { IconMessageCircle2 } from '@tabler/icons';
import InfiniteSpace from "components/infiniteScroll";

const LIMIT = 21;
export default function Discussion() {

  const [page, setPage] = useState(1);
  const [expanded, setexpanded] = useState(null);

  const loading = useSelector((state) => state.discussionReducer.discussionLoading);
  const discussions = useSelector((state) => state.discussionReducer.discussions);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: DISCUSSIONS_START,
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
    if (!loading && Array.isArray(discussions) && discussions.length > 0) {
      const count = discussions[0].count;
      if (page && count > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }


  return (
    <>
      <Toolbar loading={loading} />
      <Paper sx={styles.paper} id="scrollableDiv">
        <Paper sx={styles.innerPaper}>
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
      </Paper>
    </>
  );
}
