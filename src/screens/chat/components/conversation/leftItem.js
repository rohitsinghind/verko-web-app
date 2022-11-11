import React from 'react'
import { styles } from './styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Moment from 'react-moment';

export default function LeftItem({ msg }) {

    return (
        <Box sx={styles.leftMainBox} >
            <Box sx={styles.messageLeftBox} >
                <Typography
                    component="div"
                    sx={styles.leftText}
                >
                    {msg.text}
                </Typography>
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
