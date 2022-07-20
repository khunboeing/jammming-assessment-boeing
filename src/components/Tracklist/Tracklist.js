import "./Tracklist.css";
import Track from "../Track/Track.js";

const Tracklist = (props) => {
  const { tracks } = props;

  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            key={track.id}
            track={track} //เพื่อให้ข้อมูลถูกส่งเข้าไปในสะพาน
          />
        );
      })}
    </div>
  );
};

export default Tracklist;
