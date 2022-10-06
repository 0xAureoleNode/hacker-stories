const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="search">Search: </label>
    <input key="2" type="text" id="search" value={search} onChange={onSearch} />
  </>
);

export default Search;
