import "./App.css";
import { useState } from "react";
import data from "../../Util/data.js";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist.js";
import SearchBar from "../SearchBar/SearchBar.js";
import spotify from "../../Util/spotify.js";

const temp = [
  {
    id: "1Yk0cQdMLx5RzzFTYwmuld",
    name: "Hello",
    artist: "Adele",
    album: "25",
    uri: "spotify:track:1Yk0cQdMLx5RzzFTYwmuld",
  },
  {
    id: "0NXcvC3vstK3uuz3fRc38I",
    name: "Hello / How Are You",
    artist: "Nanou",
    album: "Exit Tunes Presents Kamikyoku Wo Utattemita 3",
    uri: "spotify:track:0NXcvC3vstK3uuz3fRc38I",
  },
  {
    id: "1ZseaIKt19broBzze3F8hz",
    name: "Hello, Anxiety",
    artist: "Phum Viphurit",
    album: "Hello, Anxiety",
    uri: "spotify:track:1ZseaIKt19broBzze3F8hz",
  },
  {
    id: "5jjXaYQqhTk1KorxvWMBXm",
    name: "Hello",
    artist: "Official HIGE DANdism",
    album: "Editorial",
    uri: "spotify:track:5jjXaYQqhTk1KorxvWMBXm",
  },
  {
    id: "7J6M4EbW2TeFnMX6TSc4sg",
    name: "Hello",
    artist: "Pop Smoke",
    album: "Gaming Music Hip Hop",
    uri: "spotify:track:7J6M4EbW2TeFnMX6TSc4sg",
  },
  {
    id: "3THdOskGxdJcRbp0DcS4s0",
    name: "Life Is Still Going On",
    artist: "NCT DREAM",
    album: "Hello Future - The 1st Album Repackage",
    uri: "spotify:track:3THdOskGxdJcRbp0DcS4s0",
  },
  {
    id: "5M13MqCBVJykhVUXgjjYcX",
    name: "Hello/Hello",
    artist: "MAISONdes",
    album: "Hello/Hello",
    uri: "spotify:track:5M13MqCBVJykhVUXgjjYcX",
  },
  {
    id: "1PZCEDvDL7BvZ6RxJ6YHxR",
    name: "Hello",
    artist: "MAMAMOO",
    album: "Hello",
    uri: "spotify:track:1PZCEDvDL7BvZ6RxJ6YHxR",
  },
];

function App() {
  const [stateSearchResult, setStateSearchResult] = useState(data);
  const [statePlaylistName, setStatePlaylistName] =
    useState("PlaylistName Jaaa!");
  const [statePlaylistTracks, setStatePlaylistTracks] = useState(temp);

  function methodAddTrack(newTrack) {
    if (statePlaylistTracks.find((oldTrack) => oldTrack.id === newTrack.id)) {
      return;
    } else {
      return setStatePlaylistTracks([newTrack, ...statePlaylistTracks]);
      //การเอาก้อน Array มาทับของเก่า มันเกิดการ update เลยเอา setPlaylistTracks
    }
  }

  function methodRemoveTrack(removeTrack) {
    const newPlaylistTracks = statePlaylistTracks.filter(
      (oldTrack) => oldTrack.id !== removeTrack.id
    );
    setStatePlaylistTracks(newPlaylistTracks);
  }

  function methodUpdatePlaylist(name) {
    setStatePlaylistName(name);
  }
  function methodSavePlaylist() {
    const trackURIs = statePlaylistTracks.map(
      (PlaylistTracks) => PlaylistTracks.uri
    );

    console.log(trackURIs);
  }

  function methodSearch(searchMusic) {
    spotify
      .search(searchMusic)
      .then((response) => setStateSearchResult(response));
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar propOnSearch={methodSearch} />
        <div className="App-playlist">
          <SearchResults
            propSearchResult={stateSearchResult}
            propOnAdd={methodAddTrack}
          />
          <Playlist
            propPlaylistName={statePlaylistName}
            propPlaylistTracks={statePlaylistTracks}
            propOnRemove={methodRemoveTrack}
            propOnNameChange={methodUpdatePlaylist}
            propOnSave={methodSavePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
