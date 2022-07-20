import "./Track.css";

const Track = (props) => {
  const { propTrack, propIsRemoval, propOnAdd, propOnRemove } = props;

  function methodAddTrack() {
    propOnAdd(propTrack);
  }

  function methodOnRemove() {
    propOnRemove(propTrack);
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
      {propIsRemoval ? (
        " "
      ) : (
        <button className="Track-action" onClick={methodOnRemove}>
          -
        </button>
      )}
    </div>
  );
};

export default Track;
