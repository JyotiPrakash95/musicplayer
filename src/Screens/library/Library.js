import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { TbPlayerPlayFilled } from "react-icons/tb";
import APIKit from "../../spotify.js";
import "./library.css"
function Library() {
const [playlists, setPlaylists] = useState(null)
    useEffect(() => {
      APIKit.get("me/playlists").then(function (response) {
        setPlaylists(response.data.items);

      });
    }, []);
  
  const navigation = useNavigate()
  const playlistPlayer = (id) => {
    navigation("/player", {state:{id:id}});
  }

  return (
    <div className="screen-container">
      <div className="playlist-body">
        {playlists?.map((playlist) => (
          <div
            key={playlist.id}
            className="playlist-card"
            onClick={() => playlistPlayer(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt={playlist.name}
            />
            <div className="playlist-content">
              <h3 className="sub-title">{playlist.name}</h3>
              <p className="total-text">{playlist.tracks.total} Songs</p>
            </div>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "20px", color: "#e99d72" }}>
                <TbPlayerPlayFilled />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
