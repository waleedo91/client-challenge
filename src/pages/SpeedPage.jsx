import SpeedForm from "../components/speed-form/SpeedForm";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SpeedPage.css";

// TODO: Replace all inputs and dropdowns with api information.

function SpeedPage() {
  const [speeds, setSpeeds] = useState([]);

  useEffect(() => {
    const speedData = async () => {
      const fetchSpeeds = await axios.get("http://localhost:8080/speed-list");
      const response = await fetchSpeeds.data;
      setSpeeds(response);
    };
    speedData();
  }, []);

  return (
    <div className="main-page">
      <SpeedForm data={speeds} />
    </div>
  );
}

export default SpeedPage;
