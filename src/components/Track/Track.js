import "./Track.css";

const Track = () => {
  const isRemoval = false;

  return (
    <div className="Track">
      <div className="Track-information">
        {/* <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
      </div>

      {isRemoval ? <button className="Track-action">-</button> : " "}
      {isRemoval ? " " : <button ClassName="Track-action">+</button>}
    </div>
  );
};

export default Track;
