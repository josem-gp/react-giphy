import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif id={'SRO0ZwmImic0'} />
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
