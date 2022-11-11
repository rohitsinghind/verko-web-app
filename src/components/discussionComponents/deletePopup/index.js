import React from 'react'
import { styles } from './styles';

import Box from '@mui/material/Box';
import { Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { CHANGE_DISCUSSION_STATUS_START } from 'store/actions';

export default function DeletePostPopUp({ open, handleClose, postID }) {

  const { enqueueSnackbar } = useSnackbar();


  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch({
      type: CHANGE_DISCUSSION_STATUS_START,
      params: {
        status: 2,
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
          <Typography>Delet Post</Typography>
          <Box sx={{ border: '0.5px solid gray', width: '100%', m: '16px' }} />
          <Typography>Are you sure you want to delete post?</Typography>
          <Box sx={{ width: '100%', m: '16px' }} />
          <Stack direction={'row'} spacing={5}>
            <Button variant='contained' color='inherit' fullWidth onClick={handleClose}>Later</Button>
            <Button variant='contained' color='primary' fullWidth onClick={deletePost}>Yes</Button>
          </Stack>
        </DialogContent>

      </Dialog>
    </>
  )
}
