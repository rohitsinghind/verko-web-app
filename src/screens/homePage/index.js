import React, { useState, useCallback, useEffect } from "react";
import { styles } from './styles';

import ImageList from '@mui/material/ImageList';
import Toolbar from "../../components/toolbar";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_COMMENT_START, ADD_POST_REACT_START, POSTS_START } from "store/actions";
import PostDialogbox from "components/postDetailsPopup";
import PostItem from "./comonents/postItem";
import DialogBox from "components/downloadAppPopup";
import InfiniteSpace from "components/infiniteScroll";

const LIMIT = 21;
export default function HomePage() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setselectedIndex] = useState(null)
  const [page, setPage] = useState(1);

  const loading = useSelector((state) => state.postReducer.postLoading);
  const posts = useSelector((state) => state.postReducer.posts);

  const dispatch = useDispatch();
  const getData = useCallback((page) => {
    dispatch({
      type: POSTS_START,
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

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  const mediaQueryIpad = window.matchMedia("(max-width: 900px)");
  let image = 3
  if(mediaQueryIpad.matches){
    image = 2
    if (mediaQuery.matches) {
      image = 1
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
            dataLength={Array.isArray(posts) ? posts.length : 0}
            onLoadMore={onLoadMore}
            childern={
              <ImageList cols={image}>
                {Array.isArray(posts) ? posts.map((item, index) => (
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
                )) : null}
              </ImageList>
            }
          />
        </Paper>
      </Paper>
      {
        mediaQuery.matches ? <DialogBox open={open} setOpen={setOpen} /> :
        <PostDialogbox
        open={open && currentUser?.userID}
        setOpen={setOpen}
        postDetails={selectedItem}
        onReact={onReact}
        onComment={onComment}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />  
}
      
    </>
  );
}
