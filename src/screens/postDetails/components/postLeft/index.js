import React from "react";
import Avatar from "@mui/material/Avatar";

export default function PostLeft(props) {
  return (
    <>
      <div className="left-post-box">
        <Avatar
          className="post"
          variant="square"
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "auto",
            height:"100%"
          }}
          alt=""
          src={props.postDetails.data.urls[0]}
        />
      </div>
    </>
  );
}
