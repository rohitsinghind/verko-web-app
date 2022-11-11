import React from 'react'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { CardMedia, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { styles } from './styles';


export default function Footer() {
  return (
    <Toolbar sx={styles.toolbar}>
      <Box sx={styles.innerBox}>
        <CardMedia
          component="img"
          sx={styles.logo}
          image={require("../../assets/images/logo.png")}
        />
        <Typography
          variant='h5'
        >&copy;2022 Verko-app</Typography>
        <Box style={styles.box}>
          <Typography variant='h6'>Follow us on</Typography>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <LinkedInIcon />
        </Box>
      </Box>
    </Toolbar>
  )
}
