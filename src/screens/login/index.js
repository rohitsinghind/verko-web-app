import React, { useState } from 'react'
import { styles } from './styles';

import Footer from '../../components/footer'

import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_START } from 'store/actions';
import CustomInput from 'components/customInput';
import { ROUTES } from 'utils/common';

export default function LoginPage() {
  const { enqueueSnackbar } = useSnackbar();


  const [creds, setCreds] = useState({ phone: '9457825355', password: '434734' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({
      type: LOGIN_START,
      params: { phone: `91${creds.phone}`, password: creds.password },
      callback: (e, response) => {
        if (e) {
          enqueueSnackbar('Invalid password', { variant: 'error' });
        } else {
          enqueueSnackbar('Logged in successfully', { variant: 'success' })
          localStorage.setItem('USER_DETAILS', JSON.stringify(response));
          navigate(`/${ROUTES.HOME}`);
        }
      }
    });
  };

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  return (
    <>
      <Box sx={styles.box}>
        <Stack direction="row" sx={styles.stackBox}>
          <CardMedia
            component="img"
            sx={styles.verko_mobile_img}
            image={require("../../assets/images/downloadIcon.png")}
          />
          <Box>
            <Paper variant="outlined" sx={{ p: 4 }}>
              <Typography
                component="div"
                sx={styles.textLogo} >
                Verko
              </Typography>
              <Box sx={styles.loginBox}>
                <CustomInput type='number' id="phone" label="Phone number" value={creds.phone || ''} onChange={handleChange} />
                <CustomInput type='password' id="password" label="Password" value={creds.password || ''} onChange={handleChange} />
                <Button onClick={handleLogin} variant="contained">Log In</Button>
              </Box>
            </Paper>
            <a href='https://play.google.com/store/apps/details?id=in.verkoApp' target="_blank" style={styles.playBtn} rel="noreferrer">
              <CardMedia
                component="img"
                sx={styles.logo}
                image={'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'}
              />
            </a>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}
