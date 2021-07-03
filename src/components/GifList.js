import React from 'react';
import Gif from './Gif';

const GifList = ({ ids }) => {
  return (
    <div className="gif-list">
      {ids.map(id => (
        <Gif id={id} key={id} />
      ))}
    </div>
  );
};

export default GifList;
