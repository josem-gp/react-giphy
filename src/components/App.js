import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  // const gifIds = ['av8xY7zDIP5qsKAgPN', 'YPz7GHPHR9tAQ5GoDJ'];
  const [gifIds, setGifIds] = useState(Array(10).fill(null));
  const [selectedId, setSelectedId] = useState('SRO0ZwmImic0');

  const clickSelectId = newId => {
    setSelectedId(newId);
  };

  const giphy = require('giphy-api')({
    apiKey: '0SwT6uJNkqFDYP9rHmuM86w8ixQ4EgEf',
    https: true,
  });

  const changeGifIds = keyword => {
    giphy.search(
      {
        q: keyword,
        rating: 'g',
        limit: 10,
      },
      (err, res) => {
        setGifIds(res.data.map(gif => gif.id));
      }
    );
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifIds />
        <Gif id={selectedId} />
      </div>
      <div className="right-scene">
        <GifList ids={gifIds} clickSelectId={clickSelectId} />
      </div>
    </div>
  );
};

export default App;
