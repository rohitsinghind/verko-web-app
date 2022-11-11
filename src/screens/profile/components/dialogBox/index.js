import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
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
              position: 'absolute',
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

    // const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      props.setOpen(true);
    };
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        </BootstrapDialogTitle>
        <DialogContent sx={{mx:10}}>
        <Avatar variant="square" sx={{ width: 320, height: 320 }} alt="" src="https://koloapp.in/images/background-graphic.webp" />

        <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 2,
                      width:340
                    }}
                  >Download the app to send</Typography>
                   <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      m: 0,
                      width:340
                    }}
                  >messages</Typography>

                <Typography
                    variant="small"
                    component="div"
                    sx={{ mt: 2, color: "gray", fontSize: 12 }}
                  >Unlock the full experience and connect with professionals today</Typography>
                  <a href='https://play.google.com/store/apps/details?id=com.kolo.android&utm_source=web&utm_campaign=web_work_post&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <Avatar variant="square" sx={{ width: 200, height: 'auto', ml:10 ,mb:5,mt:2}} alt="" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
                  </a>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </>
  )
}
