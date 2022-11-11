import React, { useState, useEffect, useCallback } from 'react'
import { styles } from './style';
import {
  useParams
} from "react-router-dom";


import Toolbar from "../../components/toolbar";
import BodyLeft from './components/bodyLeft'
import DialogBox from '../../components/downloadAppPopup'
import Navbar from 'components/navbar';

import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_DETAILS_START } from 'store/actions';
import BodyRight from './components/bodyRight';

export default function ProfilePage() {

  const { username } = useParams();

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem('USER_DETAILS');
    if (user) {
      const unstringfyData = JSON.parse(user);
      setCurrentUser(unstringfyData);
    }
  }, [])

  const loading = useSelector((state) => state.profileReducer.profileDetailsLoading);
  const profileDetails = useSelector((state) => state.profileReducer.profileDetails);
  const dispatch = useDispatch();
  const getData = useCallback((username) => {
    dispatch({
      type: PROFILE_DETAILS_START,
      params: { username }
    });
  }, [dispatch]);

  useEffect(() => {
    getData(username);
  }, [getData, username]);


  const [open, setOpen] = useState(false);
  return (
    <>
      {
        currentUser ? <Toolbar loading={loading} /> :
          <Navbar />
      }
      <Paper sx={styles.paper}>
        {!loading ?
          <>
            {profileDetails?._id ? <Paper sx={styles.innerPaper}>
              <BodyLeft currentUser={currentUser} data={profileDetails} setOpen={setOpen} loading={loading} />
              <BodyRight currentUser={currentUser} profileDetails={profileDetails} loading={loading} />
            </Paper> : <>not found</>}
          </>
          : null}
      </Paper>
      <DialogBox open={open} setOpen={setOpen} />
    </>
  )
}
