import Hours from "../../Inputs/hours/Hours";
import Direction from "../../DropDowns/direction/Direction";
import "./HoursDirection.css";

function HoursDirection() {
  return (
    <div className="hours-direction">
      <Hours />
      <Direction />
    </div>
  );
}

export default HoursDirection;
