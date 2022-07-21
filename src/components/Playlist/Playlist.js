import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const {
    propPlaylistTracks,
    propPlaylistName,
    propOnRemove,
    propOnNameChange,
    propOnSave,
  } = props;

  function methodHandleNameChange(event) {
    propOnNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={methodHandleNameChange} />
      <Tracklist
        propTracks={propPlaylistTracks}
        propPlaylistName={propPlaylistName}
        propIsRemoval={false}
        propOnRemove={propOnRemove}
      />
      <button className="Playlist-save" onClick={propOnSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
