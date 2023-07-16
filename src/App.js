import "./App.css";
import { speedList } from "./url/speed-list-api";
import SpeedPage from "./pages/SpeedPage";

function App() {
  speedList();

  return (
    <div className="App">
      <SpeedPage />
    </div>
  );
}

export default App;
