import React from 'react';

const SearchBar = ({ changeGifIds }) => {
  const handleKeyUp = event => {
    changeGifIds(event.currentTarget.value);
  };

  return <input className="form-control form-search" onKeyUp={handleKeyUp} />;
};

export default SearchBar;
