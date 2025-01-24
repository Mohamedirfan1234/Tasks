import React, { useRef, useState } from "react";
import "./App.css"; // Import the CSS file

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-player-container">
      <video ref={videoRef}>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/3508246067/preview/stock-footage-tall-modern-buildings-covered-in-vertical-gardens-showcasing-urban-greenery-and-sustainable.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
