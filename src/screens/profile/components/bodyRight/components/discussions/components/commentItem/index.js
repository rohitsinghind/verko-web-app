import React from 'react'
import { styles } from './styles';

import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from '@mui/material';
import Moment from 'react-moment';

export default function CommentItem({ comment = {}, currentUser }) {
  const { userID, text, createdAt, } = comment

  return (
    <Stack direction={'row'} spacing={2} sx={styles.main}>
      <Avatar
        alt=""
        src={currentUser.userID === userID ? currentUser.image : userID?.image || ''}
      />
      <Stack >
        <Stack direction={'row'} >

          <Typography>
            {currentUser.userID === userID ? 'You  •' : `${userID?.firstName || ''} ${userID?.lastName || ''}  •`}
          </Typography>
          <Typography>{`•   `}<Moment fromNow>{createdAt}</Moment></Typography>
        </Stack>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  )
}
