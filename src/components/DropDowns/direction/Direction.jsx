import React from "react";

function Direction() {
  return (
    <div>
      <label htmlFor="direction">Direction</label>
      <select name="direction" id="direction">
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </select>
    </div>
  );
}

export default Direction;
