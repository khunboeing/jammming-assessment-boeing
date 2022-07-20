import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const { playlistTracks, playlistName } = props;
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <Tracklist tracks={playlistTracks} playlistName={playlistName} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
