import React, { useState } from 'react'
import { styles } from './styles';

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Stack, TextField } from '@mui/material';
import { IconDotsVertical, IconHeart, IconMessageCircle2, IconSend } from '@tabler/icons';
import Moment from 'react-moment';
import Comments from '../comments';
import { useDispatch } from 'react-redux';
import { ADD_DISCUSSION_COMMENT_START, ADD_DISCUSSION_REACT_START } from 'store/actions';
import PostMenu from 'components/discussionComponents/postMenu';

export default function DiscussionItem({ discussion = {}, expanded, setexpanded, currentUser }) {
  const { _id, userID, caption, createdAt, thumbnail, media, reactCount, commentCount, react } = discussion

  const [comment, setComment] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const onReact = () => {
    dispatch({
      type: ADD_DISCUSSION_REACT_START,
      params: {
        postID: _id
      },
      callBack: (data) => {
      }
    });
  }

  const onComment = (text) => {
    dispatch({
      type: ADD_DISCUSSION_COMMENT_START,
      params: {
        postID: _id,
        text
      },
      callBack: (data) => {

      }
    });
  }
  return (
    <>
      <Card sx={styles.main}>
        <CardHeader
          sx={styles.header}
          avatar={
            <Avatar
              alt=""
              src={userID?.image}
            />
          }
          action={
            currentUser?.userID === userID._id ? <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
              <IconDotsVertical size={24} />
            </IconButton> : null
          }
          title={`${userID?.firstName || ''} ${userID?.lastName || ''}`}
          subheader={<Moment fromNow>{createdAt}</Moment>}
        />
        <CardContent
          sx={styles.content}
        >
          <Typography variant="body2" color="text.secondary">
            {caption}
          </Typography>
        </CardContent>
        {thumbnail || media ? <>
          <CardMedia
            component="img"
            height="300"
            image={thumbnail || media}
            alt="Paella dish"
          />
        </> : null}
        <CardActions
          sx={styles.action}
        >
          <Stack direction={'row'} alignItems='center'>
            <IconButton aria-label="like" onClick={currentUser ? onReact : null} >
              <IconHeart size={20} color={react ? 'red' : 'gray'} fill={react ? 'red' : 'white'} />
            </IconButton>
            <Typography >
              {reactCount}
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems='center'>
            <IconButton aria-label="comment" onClick={() => currentUser ? setexpanded(_id == expanded ? null : _id) : null} >
              <IconMessageCircle2 size={20} />
            </IconButton>
            <Typography>
              {commentCount}
            </Typography>
          </Stack>
        </CardActions>
        <Collapse in={_id == expanded && currentUser} timeout="auto" unmountOnExit>
          <Stack direction={'row'} spacing={2} sx={styles.textfieldBox} >
            <Avatar
              alt="Profile"
              size='small'
              src={currentUser?.image || require("assets/images/logo.png")}
            />
            <TextField
              sx={styles.textfield}
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
                  onComment(comment.trim());
                  setComment('');
                }
              }}
            >
              <IconSend color='#00abfb' />
            </IconButton>
          </Stack>
          {expanded ? <Comments
            currentUser={currentUser}
            discussionID={discussion?._id}
            commentCount={commentCount}
          /> : null}
        </Collapse>

      </Card>

      <PostMenu
        closeMenu={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        caption={caption}
        postID={_id}
      />
    </>
  )
}
