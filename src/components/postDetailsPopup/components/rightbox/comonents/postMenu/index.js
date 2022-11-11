import React, { useState } from 'react'
import { styles } from './styles';

import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';

import {
  IconTrash,
  IconPencil
} from '@tabler/icons';
import { Stack, Typography } from '@mui/material';
import EditCaption from '../editCaption';
import DeletePostPopUp from '../deletePopup';

export default function PostMenu({ anchorEl, closeMenu, postID, caption }) {

  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [deleteBoxOpen, setDeleteBoxOpen] = useState(false);

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        onClick={closeMenu}
        PaperProps={styles.box}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Stack spacing={1}>
          <Stack spacing={2} direction={'row'} alignItems='center' onClick={() => setEditBoxOpen(true)}>
            <IconPencil size={18} />
            <Typography>
              Edit
            </Typography>
          </Stack>
          <Divider />
          <Stack spacing={2} direction={'row'} alignItems='center'onClick={() => setDeleteBoxOpen(true)}>
            <IconTrash size={18} />
            <Typography>
              Delete
            </Typography>
          </Stack>
        </Stack>
      </Menu>

      <EditCaption
        open={editBoxOpen}
        handleClose={() => setEditBoxOpen(false)}
        postID={postID}
        caption={caption}
      />
      <DeletePostPopUp
        open={deleteBoxOpen}
        handleClose={() => setDeleteBoxOpen(false)}
        postID={postID}
      />
    </>
  )
}
