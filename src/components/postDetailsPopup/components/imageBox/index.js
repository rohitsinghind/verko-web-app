import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { Box } from '@mui/system';
import { CardMedia, ImageList, ImageListItem } from '@mui/material';

export default function ImageBox({ urls = [] }) {

  const [selectedImage, setSelectedImage] = useState('')


  useEffect(() => {
    setSelectedImage(urls.length > 0 ? urls[0] : '');
  }, [urls])
  return (
    <Box sx={styles.postBox} >
      <img
        className="post"
        style={styles.postImg}
        alt="thumb"
        src={selectedImage}
      />
      <ImageList sx={styles.addImageBox}>
        {urls.map((image) => (
          <ImageListItem onClick={() => setSelectedImage(image)}>
            <CardMedia sx={styles.image(selectedImage == image)} component='img' image={image} alt='' />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
