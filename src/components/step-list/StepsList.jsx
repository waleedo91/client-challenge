import "./StepsList.css";

// TODO: Replace table data with info from api

function StepsList() {
  return (
    <div className="steps-list">
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Hours</th>
            <th>Mins</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Horse Trot</td>
            <td>1</td>
            <td>20</td>
            <td>North</td>
          </tr>
          <tr>
            <td>Walk</td>
            <td>2</td>
            <td>0</td>
            <td>East</td>
          </tr>
          <tr>
            <td>Elephant Ride</td>
            <td>1</td>
            <td>40</td>
            <td>South East</td>
          </tr>
          <tr>
            <td>Horse Gallop</td>
            <td>2</td>
            <td>30</td>
            <td>North West</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StepsList;
