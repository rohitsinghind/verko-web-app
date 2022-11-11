import React, { useEffect, useState } from 'react'
import { styles } from './styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Posts from './components/posts';
import Details from './components/details';
import Discussions from './components/discussions';



export default function BodyRight({ profileDetails, loading, currentUser }) {

  const [value, setValue] = useState(0);
  const [userID, setUserID] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setUserID(profileDetails?._id)
  }, [profileDetails?._id]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.box}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Posts" />
          <Tab label="Details" />
          <Tab label="Discussions" />
        </Tabs>
        {value === 0 && !loading && userID ? <Posts currentUser={currentUser} userID={userID} /> : null}
        {value === 1 && !loading && userID ? <Details currentUser={currentUser} data={profileDetails} /> : null}
        {value === 2 && !loading && userID ? <Discussions currentUser={currentUser} userID={userID} /> : null}
      </Box>
    </Box>
  )
}
