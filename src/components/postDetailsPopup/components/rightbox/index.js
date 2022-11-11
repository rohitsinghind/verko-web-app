import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import Comment from "../comments";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { IconHeart, IconSend, IconMessageCircle2, IconDotsVertical } from '@tabler/icons';

import { styles } from './styles';
import { IconButton } from "@mui/material";
import PostMenu from "./comonents/postMenu";

export default function RightBox({
  user = {},
  caption = '',
  tags = [],
  createdAt = '',
  postID = '',
  reactCount = 0,
  react,
  onReact,
  onComment,
  comment,
  setComment,
  commentCount
}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  return (
    <>
      <Box sx={styles.detailBox}>
        <Box style={styles.userDetails}>
          <Stack direction={'row'} spacing={2} sx={{ display: 'flex', width: '100%' }}>
            <Avatar
              alt="avatar"
              src={user?.image || ''}
            />
            <Box sx={{ flex: 1 }}>
              <Typography >
                {`${user?.firstName || ''} ${user?.lastName || ''} ${user?.professionID?.name ? `  | ${user?.professionID?.name}` : ''}`}
              </Typography>
              <Typography sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }} >
                {caption || ''}
                <Typography sx={styles.tags}>
                  {tags.map((e) => {
                    return <>{" #" + e}</>;
                  })}
                </Typography>
              </Typography>
            </Box>
            {currentUser.userID===user._id?<IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
              <IconDotsVertical size={24} />
            </IconButton>:null}
          </Stack>
        </Box>
        <Divider light />
        <Comment postID={postID} commentCount={commentCount} />
        <Box style={styles.buttonBox}>
          <Divider />
          <Stack sx={styles.main} spacing={1}>
            <Stack direction="row" alignItems='center'>
              <IconButton aria-label="like" onClick={onReact} >
                <IconHeart size={20} color={react ? 'red' : 'gray'} fill={react ? 'red' : 'white'} />
              </IconButton>
              <Typography >
                {reactCount}
              </Typography>
              <IconButton aria-label="comment"  >
                <IconMessageCircle2 size={20} />
              </IconButton>
              <Typography>
                {commentCount}
              </Typography>
            </Stack>
            <Typography sx={styles.date}>
              <Moment fromNow>
                {createdAt}
              </Moment>
            </Typography>
          </Stack>

          <Divider light variant="fullWidth" />
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
              placeholder="Add a comment"
              onChange={(event) => setComment(event.target.value)}
            />
            <IconButton
              onClick={() => {
                if (comment.trim()) {
                  onComment(comment);
                  setComment('');
                }
              }}
            >
              <IconSend color='#00abfb' />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <PostMenu
        closeMenu={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        caption={caption}
        postID={postID}
      />
    </>
  );
}
