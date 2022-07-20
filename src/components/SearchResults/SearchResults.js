import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist.js";

const SearchResults = (props) => {
  const { searchResult } = props;
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={searchResult} />
    </div>
  );
};

export default SearchResults;
