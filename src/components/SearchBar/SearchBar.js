import "./SearchBar.css";

const SearchBar = (props) => {
  const { propOnSearch } = props;
  function methodHandleTermChange(event) {
    propOnSearch(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={methodHandleTermChange}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;
