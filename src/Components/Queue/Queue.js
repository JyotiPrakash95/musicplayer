import React from 'react'
import "./queue.css"
function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upnext"> Upnext</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue