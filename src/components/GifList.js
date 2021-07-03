import React from 'react';
import Gif from './Gif';

const GifList = ({ ids, clickSelectId }) => {
  return (
    <div className="gif-list">
      {ids.map(id => (
        <Gif id={id} key={id} clickSelectId={clickSelectId} />
      ))}
    </div>
  );
};

export default GifList;
