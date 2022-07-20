import "./Track.css";

const Track = (props) => {
  const { propTrack, propIsRemoval, propOnAdd } = props;

  function methodAddTrack() {
    propOnAdd(propTrack);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{propTrack.name}</h3>

        <p>
          {propTrack.artist} | {propTrack.album}
        </p>
      </div>

      {propIsRemoval ? (
        <button className="Track-action" onClick={methodAddTrack}>
          +
        </button>
      ) : (
        " "
      )}
      {propIsRemoval ? " " : <button className="Track-action">-</button>}
    </div>
  );
};

export default Track;
