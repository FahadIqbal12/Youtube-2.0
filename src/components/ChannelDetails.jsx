import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const[videos,setVideos] = useState([])
  const { id } = useParams();


  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => { setChannelDetail(data?.items[0]) })
    
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => { setVideos(data?.items) })
    
  },[id])
 
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background:'linear-gradient(90deg, rgba(153,23,161,1) 1%, rgba(32,21,219,1) 25%, rgba(231,42,109,1) 52%, rgba(38,32,210,1) 73%, rgba(195,6,6,1) 100%)',zIndex:10,height:'300px'}} />
      </Box>
      <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      <Box display="flex" p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos} />
        
      </Box>
    </Box>

  )
}

export default ChannelDetails