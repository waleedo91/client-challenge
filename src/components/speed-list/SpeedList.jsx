import "./SpeedList.css";

function SpeedList({ list }) {
  return (
    <div>
      <table className="speed-table">
        <thead className="table-header">
          <tr>
            <th>Step</th>
            <th>Hours</th>
            <th>Mins</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          {list.map((step, index) => (
            <tr key={index} className="table-row">
              <td>{step.step}</td>
              <td>{step.minute}</td>
              <td>{step.hour}</td>
              <td>{step.direction}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h6>Treasure At: 200 Miles South, 50 Miles North</h6>
    </div>
  );
}

export default SpeedList;
