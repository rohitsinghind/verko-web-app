import React from 'react'
import { styles } from './styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import {
  IconSettings, IconUserCircle,
  IconApps, IconRowInsertBottom,
  IconLogout, IconUserExclamation, IconBorderAll
} from '@tabler/icons';
import { ROUTES } from 'utils/common';

export default function Profile({ anchorE2, openProfile, handleCloseProfile, navigateToPage, currentUser, setShowAddPost, setShowAddDiscussion }) {

  const logout = () => {
    localStorage.clear();
    navigateToPage(ROUTES.LOGIN)
  }

  const goToProfile = () => {
    navigateToPage(currentUser.username);
  }

  return (
    <>
      <Menu
        anchorEl={anchorE2}
        id="account-menu"
        open={openProfile}
        onClose={handleCloseProfile}
        onClick={handleCloseProfile}
        PaperProps={styles.box}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem onClick={goToProfile}>
          <ListItemIcon>
            <IconUserCircle />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => setShowAddPost(true)}>
          <ListItemIcon>
            <IconApps />
          </ListItemIcon>
          Add Post
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => setShowAddDiscussion(true)}>
          <ListItemIcon>
            <IconRowInsertBottom />
          </ListItemIcon>
          Add Discussion
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => navigateToPage('nlp')}>
          <ListItemIcon>
            <IconBorderAll />
          </ListItemIcon>
          Not Liked Posts
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => navigateToPage('nfu')}>
          <ListItemIcon>
            <IconUserExclamation />
          </ListItemIcon>
          Not Followed Users
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <IconSettings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <IconLogout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
