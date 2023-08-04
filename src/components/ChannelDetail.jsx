import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos , ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
// import { padding } from '@mui/system';


const ChannelDEtail = () => {
  const [channelDetail,setChannelDetail] =useState(null);
  const[videos , setVideos] = useState([]);
  const {id} = useParams();
  console.log(channelDetail , videos);


  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=>setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items));

  },[id])

  return (
    <Box minHeight="90vh">
      <Box>
      {/* this div is for the gradient color background */}
        <div style={{
          background:'linear-gradient(135deg, rgba(115,18,18,1) 41%, rgba(218,10,10,1) 75%)',
          zIndex:10,
          height:'300px'
        }}>
        </div>
        {/* channel card is made */}
        <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>

      </Box>
      {/* video section */}
      <Box display="flex"   sx={{
        alignItems:'center',
        justifyContent: 'center',
        paddingRight:'85px'
      }}>
        <Box sx={{
          mr:{sm:'150px' , md:'200px'}
        }}/>
          <Videos videos={videos} />

       
      </Box>

    </Box>
  )
}

export default ChannelDEtail