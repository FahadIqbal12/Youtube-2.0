import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar,Feed,VideoDetail,ChannelDetails,SearchFeed} from './components/index'

 const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
       < Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetails/>} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
    
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
