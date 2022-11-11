import React from "react";

import Card from "@mui/material/Card";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styles } from "../styles";

export default function ProfessionalCard(props) {
  return (
    <>
      <Card
        sx={styles.professional}
        onClick={() => {
          props.setOpen(true);
        }}
      >
        <ImageListItem>
          <img
            src={props.img}
            srcSet={props.img}
            alt=""
            loading="lazy"
            style={{  height: "330px" }}
          />
          <ImageListItemBar  title={props.text} />
        </ImageListItem>
      </Card>
    </>
  );
}
