import React from 'react'
import { styles } from './styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Moment from 'react-moment';
import { IconCheck, IconClock } from '@tabler/icons';

export default function RightItem({ msg }) {

    return (
        <Box sx={styles.rightMainBox} >
            <Box sx={styles.messageRightBox} >
                <Typography
                    component="div"
                    sx={styles.rightText}
                >
                    {msg.text}
                </Typography>
                <Box sx={{ position: 'absolute', right: 8, bottom: 0 }}>
                    {msg.sent ? <IconCheck size={10}/> : <IconClock size={10}/>}
                </Box>
                {/* <IconChecks /> */}
            </Box>
            <Typography
                component="div"
                sx={styles.date}
            >
                <Moment fromNow>{msg.createdAt}</Moment>
            </Typography>
        </Box>
    )
}
