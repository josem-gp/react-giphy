import React from 'react';
import Gif from './Gif';

const GifList = ({ ids, changeSelectedGif }) => {
  return (
    <div className="gif-list">
      {ids.map(id => (
        <Gif id={id} key={id} changeSelectedGif={changeSelectedGif} />
      ))}
    </div>
  );
};

export default GifList;
