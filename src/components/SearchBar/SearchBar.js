import "./SearchBar.css";

const SearchBar = (props) => {
  const { propOnSearch } = props;

  let searchTerm = "";

  function methodHandleTermChange(event) {
    searchTerm = event.target.value;
  }
  function buttonSearh() {
    propOnSearch(searchTerm);
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={methodHandleTermChange}
      />
      <button className="SearchButton" onClick={buttonSearh}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
