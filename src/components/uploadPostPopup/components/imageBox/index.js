import React, { useState, useRef } from 'react'
import { styles } from './styles';
import { Box } from '@mui/system';
import { CardMedia, ImageList, ImageListItem } from '@mui/material';
import { IconPlus, IconX } from '@tabler/icons';

export default function ImageBox({ images, setImages }) {

  const fileRef = useRef();
  const [selectedImage, setSelectedImage] = useState(0);

  const uploadMultipleFiles = (e) => {
    if (e.target.files) {
      const fileArray = e.target.files;
      const files = [];
      const imageLength = 10 - images.length;
      const max = fileArray.length > imageLength ? imageLength : fileArray.length;
      for (let i = 0; i < max; i++) {
        files.push(fileArray[i]);
      }
      setImages([...images, ...files])
    }
  }

  const removeImage = (index) => {
    const newI = images.filter((item, i) => i !== index);
    setImages(newI);
  }

  return (
    <Box sx={styles.postBox} >
      <Box sx={styles.postImg} >
        <CardMedia sx={styles.postImg} component='img' image={images.length > 0 && selectedImage > -1 && selectedImage < images.length ? URL.createObjectURL(images[selectedImage]) : require('../../../../assets/images/placeholder.jpeg')} />
      </Box>
      <ImageList sx={styles.addImageBox} >
        {images.map((image, i) => (
          <ImageListItem key={`${i}`} onClick={() => setSelectedImage(i)}>
            <CardMedia sx={styles.image(selectedImage == i)} component='img' image={URL.createObjectURL(image)} alt='' />
            <IconX
              onClick={() => removeImage(i)}
              style={{ position: 'absolute', right: 4, top: 4, backgroundColor: 'white', borderRadius: 14 }}
              color={'red'}
            />
          </ImageListItem>
        ))}
        {images.length < 10 ? <ImageListItem>
          <Box sx={styles.addImage} onClick={() => fileRef.current.click()} >
            <IconPlus
              color={'white'}
            />
          </Box>

          <input ref={fileRef}
            type="file" multiple onChange={uploadMultipleFiles} hidden />
        </ImageListItem> : null}
      </ImageList>
    </Box>
  )
}
