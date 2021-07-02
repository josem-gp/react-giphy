import React from 'react';
import Gif from './Gif';

const GifList = () => {
  const gifIds = ['av8xY7zDIP5qsKAgPN', 'YPz7GHPHR9tAQ5GoDJ'];
  return (
    <div className="gif-list">
      {gifIds.map(id => (
        <Gif id={id} />
      ))}
    </div>
  );
};

export default GifList;
