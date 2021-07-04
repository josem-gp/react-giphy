import React from 'react';

const SearchBar = changeGifIds => {
  const handleKeyUp = event => {
    // changeGifIds();
    console.log(event.currentTarget.value);
  };

  return <input className="form-control form-search" onKeyUp={handleKeyUp} />;
};

export default SearchBar;
