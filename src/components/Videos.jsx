import React from 'react';
import { Stack,Box } from '@mui/material';
import  VideoCard  from './VideoCard';
import  ChannelCard  from './ChannelCard';
import Loader from './Loader';


function Videos({videos , direction}) {
    console.log(videos);
    // if(!videos.length)return 'Loading...';
    if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,index)=>(
        <Box key={index} >
        {/* this says if id == video id then render a video card   */}
          {item.id.videoId && <VideoCard video={item} />}
        {/* this says if id==channelid then this will render a channel card */}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}


        </Box>
      ))}

    </Stack>
  )
}

export default Videos