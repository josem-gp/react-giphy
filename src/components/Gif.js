import React from 'react';

const Gif = ({ id }) => {
  return (
    <div className="selected-gif">
      <img
        className="gif"
        alt="gif-select"
        src={`https://media.giphy.com/media/${id}/giphy.gif`}
      />
    </div>
  );
};

export default Gif;
