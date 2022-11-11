import React, { useState, useEffect, useCallback } from 'react'
import './styles.css'
import { styles } from './style';
import { useParams, useNavigate } from 'react-router-dom'

import Navbar from "../../components/navbar";
import PostLeft from './components/postLeft';
import PostRight from './components/postRight';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function PostDetails() {

  const { postId } = useParams();

  const [postDetails, setPostDetails] = useState({})

  const host = "http://13.235.46.38:3000/api/web/v1";

  const getPostDetails = useCallback((postId) => async () => {
    // API Call
    const response = await fetch(`${host}/post/getPostDetails?postID=${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPostDetails(json);
  }, []);


  useEffect(() => {
    getPostDetails(postId);
  }, [getPostDetails, postId]);


  const navigate = useNavigate();

  return (
    <>
      <Container className="container">
        <Navbar />
        <Box sx={styles.box} />

        <Box sx={styles.box2}>
        </Box>



        <Box sx={styles.box3}>


          <Box sx={styles.box4}>
            <PostLeft postDetails={postDetails} />
            <PostRight postDetails={postDetails} />
          </Box>


        </Box>
      </Container>

      <IconButton
        onClick={() => { navigate(-1) }}
        sx={{
          cursor: "pointer",
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon sx={styles.closeIcon} />
      </IconButton>
    </>
  )
}
