import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Videos from './Videos';
// import { fetchFromAPI } from '../utils/fetchFromAPI';
import { fetchFromAPI } from "../utils/fetchFromAPI";


const SearchFeed = () => {

  // const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const {searchTerm  } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: "white"
      }}>
        {searchTerm}<span style={{ color: '#F31503' }}>VIDEOS</span>

      </Typography>

      <Videos videos={videos} />
    </Box>


  )
}

export default SearchFeed