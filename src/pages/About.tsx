import { Button } from '@mui/material';
import React, { useState,useRef } from 'react';

const About = () => {
  const [isPlaying,setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
     const nextPlaying = !isPlaying;
     setIsPlaying(nextPlaying);
     if(ref.current){
        if(nextPlaying){
            ref.current.play();
         }else{
            ref.current.pause();
         }
     }
   
  };
  return (
    <div>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video
        width='400'
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop
      >
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default About;
