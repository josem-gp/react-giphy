import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  const gifIds = ['av8xY7zDIP5qsKAgPN', 'YPz7GHPHR9tAQ5GoDJ'];
  const selectedId = 'SRO0ZwmImic0';
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif id={selectedId} />
      </div>
      <div className="right-scene">
        <GifList ids={gifIds} />
      </div>
    </div>
  );
};

export default App;
