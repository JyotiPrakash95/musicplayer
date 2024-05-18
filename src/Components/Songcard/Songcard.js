import React from 'react'
import "./songcard.css"
import AlbumImage from '../albumImage/AlbumImage'
import AlbumInfo from '../albumInfo/AlbumInfo';

function Songcard({album}) {
  return (
    <div className="songCard-container flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}

export default Songcard