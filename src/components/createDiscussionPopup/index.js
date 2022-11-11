import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { styles } from './styles';
import ImageBox from "./components/imageBox";
import RightBox from "./components/rightbox";


export default function CreateDiscussionPopup({ setOpen, open }) {

  const [images, setImages] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };


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

          <Paper sx={styles.paper} >
            <ImageBox setImages={setImages} images={images} />
            <RightBox images={images} done={() => setOpen(false)} />
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
}
