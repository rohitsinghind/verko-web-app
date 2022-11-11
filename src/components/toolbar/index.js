import React, { useEffect, useState } from 'react'

import Notifications from './components/notifications';
import Profile from './components/profile';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, CardMedia, IconButton, Stack } from '@mui/material';
import { styles } from './styles';
import {
  IconLayoutDashboard, IconMessages,
  IconMessageCircle2, IconNotification, IconUsers,
} from '@tabler/icons';
import LinearProgress from '@mui/material/LinearProgress';


import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { ROUTES } from 'utils/common';
import SearchInput from 'components/searchInput';
import UploadPostPopup from 'components/uploadPostPopup';
import CreateDiscussionPopup from 'components/createDiscussionPopup';

export default function Navbar({ loading, onSearch = () => { } }) {

  const [currentUser, setCurrentUser] = useState({});
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddDiscussion, setShowAddDiscussion] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const location = useLocation();

  const [searchV, setSearchV] = useState('');
  const navigate = useNavigate();

  const navigateToPage = (route) => {
    navigate(`/${route}`);
  }

  const handleSearch = (e) => {
    setSearchV(e.target.value);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const handleClickNotification = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setAnchorEl(null);
  };

  const handleClickProfile = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorE2(null);
  };

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  let spacing = 1
  let iconSize = 28
  if (mediaQuery.matches) {
    spacing = 0
    iconSize = 22
  }

  return (
    <>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.innerBox}>
          <Box sx={styles.logoBox}>
            <CardMedia
              component="img"
              sx={styles.logo}
              image={require("../../assets/images/logo.png")}
            />
            <Typography variant="h4" >
              Verko
            </Typography>
          </Box>
          <Stack direction="row" spacing={6} sx={styles.stack}>
            {location.pathname == `/${ROUTES.USERS}` ? <SearchInput onSearch={onSearch} /> : null}
            <Stack direction="row" spacing={spacing}>
              <IconButton onClick={() => navigateToPage(ROUTES.HOME)}>
                <IconLayoutDashboard
                  size={iconSize}
                  color={location.pathname == `/${ROUTES.HOME}` ? '#00abfb' : 'black'}
                />
              </IconButton>
              {/* <IconButton onClick={() => navigateToPage(ROUTES.POSTS)}>
                <IconLayoutList
                  size={28}
                  color={location.pathname == `/${ROUTES.POSTS}` ? '#00abfb' : 'black'}
                />
              </IconButton> */}
              <IconButton onClick={() => navigateToPage(ROUTES.DISCUSSIONS)}>
                <IconMessages
                  size={iconSize}
                  color={location.pathname == `/${ROUTES.DISCUSSIONS}` ? '#00abfb' : 'black'}
                />
              </IconButton>
              <IconButton onClick={() => navigateToPage(ROUTES.CHATS)}>
                <IconMessageCircle2
                  size={iconSize}
                  color={location.pathname == `/${ROUTES.CHATS}` ? '#00abfb' : 'black'}
                />
              </IconButton>
              <IconButton onClick={() => navigateToPage(ROUTES.USERS)}>
                <IconUsers
                  size={iconSize}
                  color={location.pathname == `/${ROUTES.USERS}` ? '#00abfb' : 'black'}
                />
              </IconButton>
              <IconButton onClick={handleClickNotification}>
                <IconNotification
                  size={iconSize}
                  color={anchorEl ? '#00abfb' : 'black'}
                />
              </IconButton>
              <IconButton onClick={handleClickProfile}>
                <Avatar
                  sx={styles.avatar(location.pathname == `/${currentUser?.username}` || anchorE2)}
                  alt="Profile"
                  src={currentUser?.image || require("../../assets/images/logo.png")}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Toolbar>

      {loading ?
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> : null}


      <Notifications
        handleCloseNotification={handleCloseNotification}
        anchorEl={anchorEl}
        openNotification={Boolean(anchorEl)}
        navigateToPage={navigateToPage}
      />
      <Profile
        handleCloseProfile={handleCloseProfile}
        anchorE2={anchorE2}
        openProfile={Boolean(anchorE2)}
        navigateToPage={navigateToPage}
        currentUser={currentUser}
        setShowAddPost={setShowAddPost}
        setShowAddDiscussion={setShowAddDiscussion}
      />
      <UploadPostPopup setOpen={setShowAddPost} open={showAddPost} />
      <CreateDiscussionPopup setOpen={setShowAddDiscussion} open={showAddDiscussion} />
    </>
  )
}
