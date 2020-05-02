import React, { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');

  function handleInput(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        name="search-bar"
        value={search}
        onChange={handleInput}
      />
      <div>{search}</div>
    </div>
  );
}

export default SearchBar;
