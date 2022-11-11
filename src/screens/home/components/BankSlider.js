import React, { useState } from "react";
import { styles } from "../styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BankSlider() {
  const mediaQuery = window.matchMedia("(min-width: 700px)");

  const banks = [
    { img: require("../../../assets/images/equitas.png") },
    { img: require("../../../assets/images/aadharLogo.jpeg") },
    { img: require("../../../assets/images/hffc.png") },
    { img: require("../../../assets/images/HDFC-Bank-logo.png") },
    { img: require("../../../assets/images/mahindra.jpg") },
  ];

  const [index, setIndex] = useState(0);

  if (mediaQuery.matches) {
    return (
      <>
        <Box sx={styles.bankCardBg}>
          <Box sx={styles.bankCardStack}>
            <IconButton
              aria-label="previous"
              variant="contained"
              sx={styles.bankPreviousBtn}
              onClick={() => {
                if (index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              <NavigateBeforeIcon sx={{ color: "white" }} />
            </IconButton>
            <Container maxWidth="xl">
              <Typography sx={styles.bankCardText}>
                Get loans from our 25+ partner banks
              </Typography>
              <Stack direction="row" spacing={2} sx={styles.bankCardStack}>
                {banks.slice(index, index + 4).map((e) => (
                  <img
                    key={e.img}
                    src={e.img}
                    alt=""
                    style={styles.bankCardImg}
                  />
                ))}
              </Stack>
            </Container>
            <IconButton
              aria-label="next"
              variant="contained"
              sx={styles.bankBackBtn}
              onClick={() => {
                if (index + 4 < banks.length) {
                  setIndex(index + 1);
                }
              }}
            >
              <NavigateNextIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box sx={styles.bankCardBg}>
          <Typography sx={styles.bankCardText}>
            Get loans from our 25+ partner banks
          </Typography>
          <Box sx={styles.bankCardStack}>
            <IconButton
              aria-label="previous"
              variant="contained"
              sx={styles.bankPreviousBtn}
              onClick={() => {
                if (index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              <NavigateBeforeIcon sx={{ color: "white" }} />
            </IconButton>

            <Stack direction="row" spacing={1} sx={styles.bankCardStack}>
              {banks.slice(index, index + 3).map((e) => (
                <img
                  key={e.img}
                  src={e.img}
                  alt=""
                  style={styles.bankCardImgPhone}
                />
              ))}
            </Stack>

            <IconButton
              aria-label="next"
              variant="contained"
              sx={styles.bankBackBtn}
              onClick={() => {
                if (index + 3 < banks.length) {
                  setIndex(index + 1);
                }
              }}
            >
              <NavigateNextIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </>
    );
  }
}
