import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const { propPlaylistTracks, propPlaylistName, propOnRemove } = props;
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklist
        propTracks={propPlaylistTracks}
        propPlaylistName={propPlaylistName}
        propIsRemoval={false}
        propOnRemove={propOnRemove}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
