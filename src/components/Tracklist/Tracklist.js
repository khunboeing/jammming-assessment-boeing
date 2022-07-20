import "./Tracklist.css";
import Track from "../Track/Track.js"; //สิ่งที่ import เข้ามาคือ child

const Tracklist = (props) => {
  const { propTracks, propOnAdd, propIsRemoval, propOnRemove } = props;

  return (
    <div className="TrackList">
      {propTracks.map((track) => {
        return (
          <Track
            key={track.id}
            propTrack={track} //เพื่อให้ข้อมูลถูกส่งเข้าไปในสะพาน
            propOnAdd={propOnAdd}
            propIsRemoval={propIsRemoval}
            propOnRemove={propOnRemove}
          />
        );
      })}
    </div>
  );
};

export default Tracklist;
