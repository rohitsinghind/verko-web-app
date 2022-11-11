import React from "react";
import { styles } from "./styles";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogBox(props) {
  const mediaQuery = window.matchMedia("(min-width: 700px)");

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="md"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent sx={{}}>
          <Box sx={styles.downloadBoxStack}>
            <Box sx={styles.downloadBox}>
              <div>
                <Typography sx={styles.text1}>Download the app now</Typography>
                <Typography sx={styles.text2}>
                  Unlock the full experience and
                </Typography>
                <Typography sx={styles.text2}>
                  connect with professionals today
                </Typography>
                <a
                  href="https://play.google.com/store/apps/details?id=in.verkoApp"
                  target="_blank"
                  style={styles.iconCenter} rel="noreferrer"
                >
                  <img
                    style={styles.playIcon}
                    alt=""
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </a>
              </div>
            </Box>
            {mediaQuery.matches ? (
              <img
                style={styles.image}
                alt=""
                src={require("../../assets/images/Build your home-bro.png")}
              />
            ) : (
              <img
                style={styles.imagePhone}
                alt=""
                src={require("../../assets/images/Build your home-bro.png")}
              />
            )}
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
