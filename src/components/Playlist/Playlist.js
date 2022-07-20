import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const { propPlaylistTracks, propPlaylistName } = props;
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklist
        propTracks={propPlaylistTracks}
        propPlaylistName={propPlaylistName}
        propIsRemoval={false}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
