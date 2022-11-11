import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { styles } from './styles';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { CREATE_DISCUSSION_START, CREATE_POST_START } from "store/actions";
import { useSnackbar } from "notistack";

export default function RightBox({ images, done }) {
  const { enqueueSnackbar } = useSnackbar();

  const [currentUser, setCurrentUser] = useState({});
  const [comment, setComment] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const dispatch = useDispatch();

  const createPost = () => {
    dispatch({
      type: CREATE_DISCUSSION_START,
      params: {
        caption: comment,
      },
      images,
      callBack: (variant, message) => {
        enqueueSnackbar(message, { variant })
        if (variant == 'success') {
          done();
        }
      }
    });
  }

  return (
    <>
      <Box sx={styles.detailBox}>
        <Box style={styles.userDetails}>
          <Stack direction={'row'} spacing={2}>
            <Avatar
              alt="avatar"
              src={currentUser?.image || ''}
            />
            <div>
              <Typography >
                {`${currentUser?.firstName || ''} ${currentUser?.lastName || ''}`}
              </Typography>
            </div>
          </Stack>
        </Box>
        <Divider />

        <Stack
          direction="row"
          sx={styles.commentInputBox}
        >
          <TextField
            InputProps={{ disableUnderline: true }}
            multiline
            fullWidth
            value={comment}
            variant="standard"
            placeholder="Add a Caption"
            onChange={(event) => setComment(event.target.value)}
          />
        </Stack>

        <Divider />
        <Button
          variant="contained"
          onClick={() => createPost()}
          endIcon={<SendRoundedIcon />}
          sx={{ position: 'absolute', bottom: 0, alignSelf: 'center', margin: 2, minWidth: '200px' }}>
          POST
        </Button>
      </Box>
    </>
  );
}
