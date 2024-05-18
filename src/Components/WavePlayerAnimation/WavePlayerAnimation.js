import React from 'react'
import "./wavePlayer.css"
function WavePlayerAnimation({isPlaying}) {
  const waveClass = isPlaying ? "box active" : "box";
  return (
    <div className="box-container flex">
      <div className={`${isPlaying} box1`}></div>
      <div className={`${isPlaying} box2`}></div>
      <div className={`${isPlaying} box3`}></div>
      <div className={`${isPlaying} box4`}></div>
      <div className={`${isPlaying} box5`}></div>
      <div className={`${isPlaying} box6`}></div>
      <div className={`${isPlaying} box7`}></div>
      <div className={`${isPlaying} box2`}></div>
      <div className={`${isPlaying} box3`}></div>
      <div className={`${isPlaying} box4`}></div>
      <div className={`${isPlaying} box5`}></div>
      <div className={`${isPlaying} box6`}></div>
      <div className={`${isPlaying} box7`}></div>
    </div>
  );
}

export default WavePlayerAnimation