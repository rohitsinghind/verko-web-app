import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { styles } from './styles';
import ImageBox from "./components/imageBox";
import RightBox from "./components/rightbox";


export default function PostDialogbox({
  postDetails = {}, setOpen,
  open, onReact, onComment,
  handlePrevious, handleNext }) {

  const [comment, setComment] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
      handlePrevious()
    }
    else if (e.keyCode == '39') {
      handleNext()
    }

  }

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent
          sx={styles.content}
        >
          <IconButton
            edge="start"
            onClick={handleClose}
            aria-label="close"
            sx={styles.closeBtn}
          >
            <CloseIcon sx={styles.closeIcon} />
          </IconButton>

          <IconButton
            edge="start"
            onClick={(e) => {
              setComment('');
              handlePrevious(e);
            }}
            aria-label="previous"
            sx={styles.previousBtn}
          >
            <NavigateBeforeIcon sx={styles.navigationIcon} />
          </IconButton>


          <IconButton
            edge="start"
            onClick={(e) => {
              setComment('');
              handleNext(e);
            }}
            aria-label="next"
            sx={styles.nextBtn}
          >
            <NavigateNextIcon sx={styles.navigationIcon} />
          </IconButton>

          <Paper sx={styles.paper} >
            <ImageBox urls={postDetails?.urls} />
            <RightBox
              user={postDetails?.userID}
              caption={postDetails?.caption}
              tags={postDetails?.tags}
              createdAt={postDetails?.createdAt}
              postID={postDetails?._id}
              commentCount={postDetails?.commentCount}
              reactCount={postDetails?.reactCount}
              react={postDetails?.react}
              onReact={() => onReact(postDetails._id)}
              onComment={(text) => onComment(postDetails._id, text)}
              comment={comment}
              setComment={setComment}
            />
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
}
