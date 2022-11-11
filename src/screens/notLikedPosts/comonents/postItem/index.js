import React, { useState, useRef, useEffect } from "react";

import ImageListItem from '@mui/material/ImageListItem';
import { CardMedia, Stack, Typography } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import { IconHeart, IconMessageCircle2 } from '@tabler/icons';

import { styles } from './styles'
export default function PostItem({ item, setOpen, setSelectedItem, index }) {

    const imgEl = useRef(null);
    const [loading, setLoading] = useState(true);
    const [showCounts, setShowCounts] = useState(false);
    const [image, setImage] = useState(item.thumbnail || item.urls?.length > 0 ? item.urls[0] : '');
    const onImageLoaded = () => setLoading(false);

    useEffect(() => {
        const imgElCurrent = imgEl.current;

        if (imgElCurrent) {
            imgElCurrent.addEventListener('load', onImageLoaded);
            return () => imgElCurrent.removeEventListener('load', onImageLoaded);
        }
    }, [imgEl]);



    return (
        <ImageListItem key={`${index}`} style={styles.postImgView}
            onClick={() => {
                setOpen && setOpen(true)
                setSelectedItem && setSelectedItem(item)
            }}>
            <CardMedia
                component='img'
                sx={styles.postImg(loading ? 0 : '100%')}
                src={image}
                onLoad={() => setLoading(false)}
                onError={(er) => {
                    setLoading(false);
                }}
            />
            {loading ?
                <Skeleton
                    animation="wave"
                    variant="rectangular"
                    sx={styles.skelton}
                />
                : null}
            <Stack direction={'row'} spacing={1} sx={styles.countView(showCounts ? '#00000055' : '#00000000')}
                onMouseEnter={() => setShowCounts(true)}
                onMouseLeave={() => setShowCounts(false)}>
                {showCounts ? <Stack direction={'row'} spacing={1}>
                    <IconHeart color={item.react ? 'red' : 'white'} fill={item.react ? 'red' : 'none'} />
                    <Typography sx={styles.count}>{item.reactCount || 0}</Typography>
                </Stack> : null}
                {showCounts ? <Stack direction={'row'} spacing={1}>
                    <IconMessageCircle2 size={24} color='white' />
                    <Typography sx={styles.count}>{item.commentCount || 0}</Typography>
                </Stack> : null}
            </Stack>
        </ImageListItem >
    );
}
