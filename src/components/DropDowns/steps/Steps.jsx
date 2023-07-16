import "./Steps.css";

function Steps() {
  return (
    <div>
      <label htmlFor="step">Step</label>
      <select name="step" id="step">
        <option value="walk">Walk</option>
        <option value="Run">Run</option>
        <option value="horse trot">Horse Trot</option>
        <option value="horse gallop">Horse Gallop</option>
        <option value="elephant ride">Elephant Ride</option>
      </select>
    </div>
  );
}

export default Steps;
