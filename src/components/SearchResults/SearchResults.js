import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist.js";

const SearchResults = (props) => {
  const { propSearchResult, propOnAdd } = props;
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist
        propTracks={propSearchResult}
        propIsRemoval={true}
        propOnAdd={propOnAdd}
      />
      {/* propIsmoval เป็นสะพานที่ถูกสร้างขึ้นมาใหม่ แบบไม่ต้องไปเรียก deconstructionของprop แต่ใช้ชื่อเดียวกันเพื่อจะไปเรียกการใช้งานของ propIsRemoval ที่เราใส่เป็นค่า false ใน<Tracklist /> component */}
    </div>
  );
};

export default SearchResults;
