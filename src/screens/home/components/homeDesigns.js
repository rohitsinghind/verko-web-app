import React from "react";
import { styles } from "../styles";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HomeDesigns(props) {
  return (
    <>
      <Card
        sx={styles.homeDesigns}
        onClick={() => {
          props.setOpen(true);
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="160px" image={props.img} alt="" />

          <Typography sx={styles.homeDesignText}>{props.text}</Typography>
        </CardActionArea>
      </Card>
    </>
  );
}
