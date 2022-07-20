import "./App.css";
import { useState } from "react";
import data from "../../Util/data.js";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [searchResult, setSearchResult] = useState(data);
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
          <SearchResults searchResult={searchResult} />

          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
