import React from 'react';

const Gif = ({ id, clickSelectId }) => {
  const handleClick = () => {
    clickSelectId(id);
  };

  return (
    <div className="selected-gif">
      <img
        className="gif"
        alt="gif-select"
        onClick={() => {
          handleClick();
        }}
        src={`https://media.giphy.com/media/${id}/giphy.gif`}
      />
    </div>
  );
};

export default Gif;
