import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import ImageList from '@mui/material/ImageList';
import Toolbar from "../../components/toolbar";
import { Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { USERS_START } from "store/actions";
import UserItem from "./comonents/userItem";
import InfiniteSpace from "components/infiniteScroll";
import { Box } from "@mui/system";
import { IconUsers } from "@tabler/icons";

const LIMIT = 12;
export default function Users() {

  const [query, setQuery] = useState({ page: 1 });

  const loading = useSelector((state) => state.profileReducer.usersLoading);
  const users = useSelector((state) => state.profileReducer.users);

  const dispatch = useDispatch();
  const getData = useCallback((q) => {
    dispatch({
      type: USERS_START,
      params: {
        pageNo: q.page,
        limit: LIMIT,
        search: q.search
      }
    });
  }, [dispatch]);

  useEffect(() => {
    getData(query);
  }, [getData, query]);

  console.log(users);


  const onLoadMore = () => {
    if (!loading && Array.isArray(users) && users.length > 0) {
      const count = users[0].count;
      if (query.page && count > LIMIT * query.page) {
        setQuery({ ...query, page: query.page + 1 })
      }
    }
  }

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  let usersNos = 3
  if (mediaQuery.matches) {
    usersNos =  1
  }


  return (
    <>
      <Toolbar loading={loading} onSearch={(search) => setQuery({ page: 1, search })} />
      <Paper sx={styles.paper} id="scrollableDiv">
        <Paper sx={styles.innerPaper}>
          {Array.isArray(users) && users.length > 0 ? <InfiniteSpace
            loading={loading}
            scrollableTarget={'scrollableDiv'}
            dataLength={Array.isArray(users) ? users.length : 0}
            onLoadMore={onLoadMore}
            childern={
              <ImageList cols={usersNos}>
                {users.map((item, index) => (
                  <UserItem
                    item={item}
                  />
                ))}
              </ImageList>
            }
          /> :
            <Box sx={styles.placeHolder} >
              <IconUsers
                size={40}
                color={'gray'}
              />
              <Typography color={'gray'} variant='h4'>NO USER FOUND!</Typography>
            </Box>
          }
        </Paper>
      </Paper>
    </>
  );
}
