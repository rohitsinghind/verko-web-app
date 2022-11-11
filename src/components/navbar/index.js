import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { styles } from "./styles";

export default function Navbar() {
  return (
    <Toolbar sx={styles.toolbar}>
      <Container maxWidth="xl" className="container">
        <Box sx={styles.logoBox}>
          <CardMedia
            component="img"
            sx={styles.logo}
            image={require("../../assets/images/logo.png")}
          />
          <Typography variant="h2">Verko</Typography>
          <a
            style={styles.playIcon}
            href="https://play.google.com/store/apps/details?id=in.verkoApp"
            target="_blank" rel="noreferrer"
          >
            <CardMedia
              component="img"
              height="50"
              image="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </Box>
      </Container>
    </Toolbar>
  );
}
