import React, { useEffect, useState } from 'react'
import "./player.css";
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import Queue from '../../Components/Queue/Queue';
import Songcard from '../../Components/Songcard/Songcard';
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({})
  const [currentIndex, setCurrentIndex] = useState([0]);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
          console.log(currentTrack);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer currentTrack={currentTrack} total={tracks} />
      </div>
      <div className="right-player-body">
        <Songcard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
