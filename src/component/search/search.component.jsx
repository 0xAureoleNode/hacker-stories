import { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        // value={searchTerm}
        onChange={handleChange}
      />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
