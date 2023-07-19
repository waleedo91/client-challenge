import SpeedList from "../../components/speed-list/SpeedList";

import { useState } from "react";
import { Button } from "react-bootstrap";

import "./SpeedForm.css";

function SpeedForm({ data }) {
  const [minute, setMinute] = useState("");
  const [hour, setHour] = useState("");
  const [step, setStep] = useState("Walk");
  const [direction, setDirection] = useState("North");
  const [speedData, setSpeedData] = useState([{}]);

  const handleMinute = (e) => {
    setMinute(e.target.value);
  };

  const handleHour = (e) => {
    setHour(e.target.value);
  };

  const handleStep = (e) => {
    setStep(e.target.value);
  };

  const handleDirection = (e) => {
    setDirection(e.target.value);
  };

  const handleCancel = () => {
    setHour("");
    setMinute("");
    setDirection("");
    setStep("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpeedData([
      ...speedData,
      {
        step,
        minute,
        hour,
        direction,
      },
    ]);
  };

  const directionOption = (
    <select id="direction" onChange={handleDirection}>
      <option value="North">North</option>
      <option value="South">South</option>
      <option value="East">East</option>
      <option value="West">West</option>
      <option value="South East">South East</option>
      <option value="South West">South West</option>
      <option value="North West">North West</option>
      <option value="North East">North East</option>
    </select>
  );

  return (
    <div className="step-container">
      <div className="step-table">
        <SpeedList list={speedData} />
      </div>
      <div className="step-form">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="steps-min">
              <label className="step" htmlFor="step">
                Step:
              </label>
              <select id="step" onChange={handleStep}>
                {data.map((speed) => (
                  <option key={speed.id} value={speed.speedDescpription}>
                    {speed.speedDescpription}
                  </option>
                ))}
              </select>
              <label htmlFor="minute" className="minute">
                Min:
              </label>
              <input
                id="minute"
                type="text"
                value={minute}
                onChange={handleMinute}
              />
            </div>
          </div>
          <div className="hours-direction">
            <label htmlFor="hour" className="hour">
              Hours:
            </label>
            <input id="hour" type="text" value={hour} onChange={handleHour} />
            <label htmlFor="direction" className="direction">
              Direction:
            </label>
            {directionOption}
          </div>
          <div>
            <Button type="submit">Save</Button>
          </div>
        </form>
        <Button type="cancel" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default SpeedForm;
