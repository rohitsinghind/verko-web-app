import React, { useState } from 'react'
import { styles } from './styles';

import Box from '@mui/material/Box';
import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import CustomInput from 'components/customInput';
import { useDispatch } from 'react-redux';
import { UPDATE_POST_START } from 'store/actions';
import { useSnackbar } from 'notistack';

export default function EditCaption({ open, handleClose, postID, caption }) {
  const { enqueueSnackbar } = useSnackbar();

  const [comment, setComment] = useState(caption);

  const dispatch = useDispatch();

  const updatePost = () => {
    dispatch({
      type: UPDATE_POST_START,
      params: {
        caption: comment,
        postID,
      },
      callBack: (variant, message) => {
        enqueueSnackbar(message, { variant })
        if (variant == 'success') {
          handleClose();
        }
      }
    });
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent
          sx={styles.content}
        >
          <Typography>Edit Caption</Typography>
          <Box sx={{ border: '0.5px solid gray', width: '100%',m:'16px' }} />
          <CustomInput
            label="Caption" value={comment || ''}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button variant='contained' onClick={updatePost}>Update</Button>
        </DialogContent>

      </Dialog>
    </>
  )
}
