import React, { useRef } from 'react'
import backgroundVideo from '../assets/videos/background-video.mp4'


const VideoBackground = ({speed}) => {

    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = speed;
    };
  return (
    <div>        
    <video ref={videoRef} onCanPlay={() => setPlayBack()} autoPlay loop muted src={backgroundVideo} className='background-video'/>
    </div>
  )
}

export default VideoBackground