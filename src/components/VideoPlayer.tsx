'use client'
import React, { useState } from 'react';



const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const toggleVideo = () => {
      setIsPlaying(!isPlaying);
      const video = document.getElementById('video') as HTMLVideoElement;
  
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    };
  
    return (
      <div className="relative">
        <video
          id="video"
          className="w-full h-auto"
          controls
          onClick={toggleVideo}
        >
          <source src='https://youtu.be/v4Q1ZaSpnBc' type="" />
        </video>
        {!isPlaying && (
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-4 rounded-full hover:bg-gray-800"
            onClick={toggleVideo}
          >
            ▶️ 
          </button>
        )}
      </div>
    );
  };
  
  export default VideoPlayer;
  