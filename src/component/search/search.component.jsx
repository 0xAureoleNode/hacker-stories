const Search = ({ onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      type="text"
      id="search"
      // value={searchTerm}
      onChange={onSearch}
    />
  </div>
);

export default Search;
