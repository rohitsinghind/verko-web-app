import React from "react";
import Moment from 'react-moment';

import Comment from "../comment";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export default function PostRight(props) {

  return (
    <>
      <div className="right-post-box">
        <Stack direction="row" spacing={2} sx={{ }}>
          <Avatar
            alt=""
            src={
              props.postDetails.data.userID.image !== undefined
                ? props.postDetails.data.userID.image
                : props.postDetails.data.userID.professionID.image
            }
            sx={{ width: 40, height: 40 }}
          />
          <div>
            <Typography
              component="div"
              sx={{
                ml: 2,
                mt:0.3,
                fontSize: 15,
                fontWeight:550
              }}
            >
              {props.postDetails.data.userID.firstName + " " + props.postDetails.data.userID.lastName}
            </Typography>
            <Typography
              component="div"
              sx={{
                ml: 2,
                fontSize: 13,
                color: "gray",
              }}
            >
              {props.postDetails.data.userID.professionID.name +
                " | " +
                props.postDetails.data.userID.location.city +
                ", " +
                props.postDetails.data.userID.location.state}
            </Typography>
          </div>

            <Typography sx={{
              pl:4,
              display:"flex",
              alignItems:"center",
              cursor:"pointer",
             color:"orange",
             fontSize: 15,
             fontWeight: 600
           }}>
           Follow
         </Typography>
        </Stack>

        <Divider sx={{ my:2 }}/>

       
            <Box
            className='hide-scrollbar' sx={{height:"60%", overflow:'scroll'}}>
              <Stack direction="row" spacing={2} sx={{ }}>
          <Avatar
            alt=""
            src={
              props.postDetails.data.userID.image !== undefined
                ? props.postDetails.data.userID.image
                : props.postDetails.data.userID.professionID.image
            }
            sx={{ width: 40, height: 40 }}
          />
            <Typography
              component="div"
              sx={{
                display:"flex",
              alignItems:"start",
                ml: 2,
                pt:1,
                fontSize: 15,
                fontWeight:550
              }}
            >
              {props.postDetails.data.userID.firstName + " " + props.postDetails.data.userID.lastName}  
         </Typography>
         <Typography sx={{
             fontSize: 15, ml:2,pt:1, width:300
           }}>
           {props.postDetails.data.caption}
           <Typography
                    
                    component="div"
                    sx={{color: "#00376b", fontSize: 15,}}
                  >
           {props.postDetails.data.tags.map((e) => {
                return (
                  <>
                    {" #"+e}
                  </>
                );
              })}
               </Typography>
               <Typography
                    component="div"
                    sx={{color: "gray", fontSize: 12, mt:2}}
                  >
                    <Moment fromNow>{props.postDetails.data.createdAt}</Moment>
               </Typography>
            </Typography>
        </Stack>
       
            <Comment/>
            </Box>

            <Stack direction="row" spacing={2} sx={{mt:4}}>
            <FavoriteBorderIcon/>
            <ChatBubbleOutlineIcon/>
            <ShareIcon/>
            </Stack>
            <Typography
            component="div"
            sx={{
              mt:1,
              fontSize: 16,
              fontWeight:550
            }}
          >{props.postDetails.data.reactCount} likes</Typography>
          <Typography
            component="div"
            sx={{
              color:"gray",
              mt:1,
              mb:1,
              fontSize: 13,
            }}
          ><Moment format="MMMM Do YYYY">{props.postDetails.data.createdAt}</Moment>
          </Typography>
          <Stack direction="row" spacing={2} sx={{mt:2 }}>
          <TextField sx={{fontSize:15, width:420}} variant="standard"  placeholder="Add a comment"/>
          <Typography sx={{
              display:"flex",
              alignItems:"center",
              pl:2,
              cursor:"pointer",
             color:"#0095f6",
             fontSize: 15,
             fontWeight: 600
           }}>
           Post
         </Typography>
          </Stack>
      </div>
    </>
  );
}
