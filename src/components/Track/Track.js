import "./Track.css";

const Track = (props) => {
  const isRemoval = false;
  const { track } = props;

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>

        <p>
          {track.artist} | {track.album}
        </p>
      </div>

      {isRemoval ? <button className="Track-action">-</button> : " "}
      {isRemoval ? " " : <button className="Track-action">+</button>}
    </div>
  );
};

export default Track;
