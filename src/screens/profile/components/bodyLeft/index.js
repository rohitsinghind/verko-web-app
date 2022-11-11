import React from "react";
import { styles } from './styles';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { IconBriefcase, IconMapPin, IconShare, IconTools } from '@tabler/icons';
import { FOLLOW_START } from "store/actions";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

export default function BodyLeft({ data, currentUser }) {

  const { enqueueSnackbar } = useSnackbar();
  const {
    _id,
    firstName, lastName, image, postCount,
    followers, professionID, following,
    experience, profServiceIDs, userType, locationIDs, isFollowing } = data;

  const dispatch = useDispatch();

  const onFollow = (e) => {
    e.stopPropagation();
    dispatch({
      type: FOLLOW_START,
      params: {
        userID: _id
      },
      callBack: (err, suc) => {
        if (suc) {
          enqueueSnackbar('Done', { variant: 'success' });
        } else {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
      }
    });

  };

  const mediaQuery = window.matchMedia("(max-width: 390px)");
  let spacing = 2
  if (mediaQuery.matches) {
    spacing = 1
  }

  return (
    <Box sx={styles.root}>
      <div>
        <Stack direction="row" spacing={3} >
          <Stack spacing={1} alignItems='center'>
            <Avatar
              src={image}
              sx={styles.userImg}
            />
            <Typography >
              {`${firstName || 'Verko User'} ${lastName || ''}`}
            </Typography>
          </Stack>
          <Stack spacing={2} >
            <Stack direction="row" spacing={spacing} divider={<div>|</div>} alignItems='center'>
              <Stack alignItems='center'>
                <Typography variant="h4">
                  {postCount || 0}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  POSTS
                </Typography>
              </Stack>
              <Stack alignItems='center'>
                <Typography variant="h4">
                  {followers || 0}
                </Typography>
                <Typography variant="caption" gutterBottom component="div" >
                  FOLLOWERS
                </Typography>
              </Stack>
              <Stack alignItems='center'>
                <Typography variant="h4">
                  {following || 0}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  FOLLOWINGS
                </Typography>
              </Stack>
            </Stack>

            {currentUser && _id != currentUser.userID ? <Stack
              direction="row"
              spacing={2}
              sx={styles.center}
            >
              <Button
                onClick={onFollow}
                variant={isFollowing ? "outlined" : 'contained'}
              >
                {isFollowing ? 'Unfollow' : 'follow'}
              </Button>
              <Button
                variant="outlined"
              >
                Message
              </Button>
            </Stack> : null}
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          sx={{ mt: 4, mb: 2, }}
          startIcon={<IconShare />}
        >
          Copy Profile Link
        </Button>

        {userType === 3 ?
          <Stack spacing={2} sx={{ mt: 2, mb: 2, }}>
            <Stack direction={'row'} alignItems='center'>
              <IconBriefcase
                color={'#00abfb'}
              />
              <Typography sx={styles.profession}>
                {`${professionID?.name} • ${experience || 0} years`}
              </Typography>
            </Stack>

            <Stack direction={'row'} alignItems='center'>
              <IconMapPin
                color={'#00abfb'}
              />
              {locationIDs?.map((e) =>
                <Typography sx={styles.profession}>{e.city + ", " + e.state}
                </Typography>)}
            </Stack>

            <Stack direction={'row'} alignItems='center'>
              <IconTools
                color={'#00abfb'}
              />
              <Typography sx={styles.profession}>
                Services Provided
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
              {profServiceIDs?.map((e) => {
                return (
                  <Typography sx={styles.service}>
                    {e.name}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
          : null}
      </div>
    </Box >
  );
}
