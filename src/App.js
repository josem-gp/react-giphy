import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif id={'SRO0ZwmImic0'} />
      </div>
      <div className="right-scene"></div>
    </div>
  );
};

export default App;
