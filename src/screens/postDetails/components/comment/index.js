import React, { useState, useEffect, useCallback } from 'react'
import Moment from 'react-moment';
import { useParams } from 'react-router-dom'

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Comment() {

  const { postId } = useParams();

  const [postComments, setPostComments] = useState({})

  const host = "http://13.235.46.38:3000/api/web/v1";

  const getComments = useCallback((postId) => async () => {
    const response = await fetch(`${host}/post/getPostComments?postID=${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPostComments(json);
  }, []);

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);



  return (
    <>
      {(postComments.message === "Comments not found.") ? null : postComments.data.map((e) => {
        return (
          <>
            <Stack key={e._id} direction="row" spacing={2} sx={{ mt: 4 }}>
              <Avatar
                alt=""
                src={(e.userID.image !== undefined) ? e.userID.image : e.userID.professionDetails.image}
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "start",
                  ml: 2,
                  pt: 1,
                  fontSize: 15,
                  fontWeight: 550
                }}
              >
                {e.userID.firstName} {e.userID.lastName}
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: 15, ml: 2, pt: 1, width: 300
                }}
              >
                {e.text}
                <Typography
                  component="div"
                  sx={{ color: "gray", fontSize: 12, mt: 1 }}
                >
                  <Moment fromNow>{e.createdAt}</Moment>
                </Typography>
              </Typography>

            </Stack>

          </>
        );
      })}


    </>
  )
}
