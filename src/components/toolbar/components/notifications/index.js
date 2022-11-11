import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { NOTIFICATIONS_START } from 'store/actions';
import { IconBellX, IconHeart, IconMessageCircle2, IconUserPlus } from '@tabler/icons';
import InfiniteSpace from 'components/infiniteScroll';
import Moment from 'react-moment';
import { Avatar, CardMedia, Stack } from '@mui/material';
import { notificationTypeColor, NOTIFICATION_TYPE } from 'utils/common';
const LIMIT = 10;
export default function Notifications({ anchorEl, openNotification, handleCloseNotification }) {

  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.notificationReducer.notificationLoading);
  const notifications = useSelector((state) => state.notificationReducer.notifications);
  const totalNotification = useSelector((state) => state.notificationReducer.totalNotification);
  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: NOTIFICATIONS_START,
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
      if (page && totalNotification > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }

  const getIcon = (type) => {
    switch (JSON.stringify(type)) {
      case NOTIFICATION_TYPE.POST_COMMENT:
      case NOTIFICATION_TYPE.DISCUSSION_COMMENT:
        return <IconMessageCircle2 color='white' />
      case NOTIFICATION_TYPE.POST_REACT:
      case NOTIFICATION_TYPE.DISCUSSION_REACT:
        return <IconHeart color='white' />
      case NOTIFICATION_TYPE.FOLLOW:
        return <IconUserPlus color='white' />
      case NOTIFICATION_TYPE.PROFILE_INCOMPLETE:
        return;

      case NOTIFICATION_TYPE.PROFILE_VIEW:
        return;

      case NOTIFICATION_TYPE.MESSAGE:
        return;

      case NOTIFICATION_TYPE.TRENDING_POST:
        return;

      case NOTIFICATION_TYPE.TRENDING_DISCUSSION:
        return;

      case NOTIFICATION_TYPE.MISC:
        return;
      default:
        return null;
    }
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openNotification}
        onClose={handleCloseNotification}
        onClick={handleCloseNotification}
        PaperProps={styles.box}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Box sx={styles.boxHeight} id="notscroll">
          {Array.isArray(notifications) && notifications.length > 0 ?
            <InfiniteSpace
              scrollableTarget={'notscroll'}
              dataLength={Array.isArray(notifications) ? notifications.length : 0}
              loading={loading}
              onLoadMore={onLoadMore}
              childern={
                <Box >
                  {notifications?.map((item) =>
                    <Stack direction={'row'} sx={styles.list}>
                      <Stack direction={'row'} spacing={1}>
                        <Avatar sx={{ bgcolor: notificationTypeColor(item.type) }}>
                          {getIcon(item.type)}
                        </Avatar>
                        <Stack>
                          <Typography >
                            {item.message}
                          </Typography>
                          <Typography sx={styles.timeText}>
                            <Moment fromNow>{item.createdAt}</Moment>
                          </Typography>
                        </Stack>
                      </Stack>
                      <CardMedia
                        image={
                          item.sourceID?.image ||
                          item.sourceID?.thumbnail ||
                          (Array.isArray(item.sourceID?.urls) && item.sourceID?.urls?.length > 0 ? item.sourceID?.urls[0] : '')
                        }
                        alt=""
                        style={styles.postImage}
                      />
                    </Stack>
                  )}
                </Box>
              }
            /> :
            <Box sx={styles.nocomments}>
              <IconBellX color='gray' size={40} />
              <Typography>
                No notification
              </Typography>
            </Box>
          }
        </Box>
      </Menu>
    </>
  )
}
