import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PostDialogbox from 'components/postDetailsPopup';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_COMMENT_START, ADD_POST_REACT_START, USER_POSTS_START } from 'store/actions';
import InfiniteSpace from 'components/infiniteScroll';
import { Box } from '@mui/system';
import PostItem from './comonents/postItem';
import DialogBox from 'components/downloadAppPopup';

const LIMIT = 21;
export default function Posts({ userID, currentUser }) {

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIndex, setselectedIndex] = useState(null)

  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.postReducer.userPostLoading);
  const posts = useSelector((state) => state.postReducer.userPosts);

  const dispatch = useDispatch();
  const getData = useCallback((page, userID) => {
    dispatch({
      type: USER_POSTS_START,
      params: {
        pageNo: page,
        limit: LIMIT,
        userID
      }
    });
  }, [dispatch]);

  useEffect(() => {
    getData(page, userID);
  }, [getData, page, userID]);


  const onLoadMore = () => {
    if (!loading && Array.isArray(posts) && posts.length > 0) {
      const count = posts[0].count;
      if (page && count > LIMIT * page) {
        setPage(page + 1);
      }
    }
  }

  const onReact = (postID) => {
    dispatch({
      type: ADD_POST_REACT_START,
      params: {
        postID
      },
      callBack: (data) => {
        const deleted = data.deleted;
        setSelectedItem({
          ...selectedItem,
          react: deleted ? null : data,
          reactCount: deleted ? selectedItem.reactCount - 1 :
            selectedItem.reactCount + 1
        })
      }
    });
  }

  const onComment = (postID, text) => {
    dispatch({
      type: ADD_POST_COMMENT_START,
      params: {
        postID,
        text
      },
      callBack: (data) => {
        setSelectedItem({
          ...selectedItem,
          commentCount: selectedItem.commentCount ? selectedItem.commentCount + 1 : 1
        })
      }
    });
  }
  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setselectedIndex(selectedIndex - 1)
      setSelectedItem(posts[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    setselectedIndex(selectedIndex + 1)
    setSelectedItem(posts[selectedIndex + 1]);
    if (posts.length - selectedIndex < 5) {
      onLoadMore()
    }
  };



  return (
    <>
      <Box key={userID} sx={styles.main} id="scrollableDiv">
        <InfiniteSpace
          loading={loading}
          scrollableTarget={'scrollableDiv'}
          dataLength={Array.isArray(posts) ? posts.length : 0}
          onLoadMore={onLoadMore}
          childern={<ImageList cols={3} >
            {Array.isArray(posts) ? posts.map((item, index) => (
              <ImageListItem key={item._id} >
                <PostItem
                  index={index}
                  key={`${item._id}-${index}`}
                  setOpen={setOpen}
                  onReact={onReact}
                  setSelectedItem={() => {
                    setSelectedItem(item);
                    setselectedIndex(index);
                  }}
                  item={item}
                />
              </ImageListItem>
            )) : null}
          </ImageList>
          }
        />
      </Box>

      {
        currentUser ?
          <PostDialogbox
            open={open && currentUser?.userID}
            setOpen={setOpen}
            postDetails={selectedItem}
            onReact={onReact}
            onComment={onComment}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          /> :
          <DialogBox open={open} setOpen={setOpen} />
      }
    </>
  )
}