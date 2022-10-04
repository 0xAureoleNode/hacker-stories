const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input type="text" id="search" value={search} onChange={onSearch} />
  </div>
);

export default Search;
