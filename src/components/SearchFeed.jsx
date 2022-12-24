import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setVideos(data.items) });
    
  }, [searchTerm]);
  return (
      <Box p={2} sx={{overflowY:"auto",height:'100vh',flex:2}}>
        <Typography variant='h4' fontWight='bold' mb={2} sx={{color:'#fff'}} >
        Seaech results for : <span style={{ color: '#f31503' }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
     
  )
}

export default SearchFeed;



