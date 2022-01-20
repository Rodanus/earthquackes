import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details/Details";
import Homepage from "./Pages/Homepage/Homepage";
import EarthquakeBackground from "./images/earthquakeBG.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.6)), url(${EarthquakeBackground})`
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:eventId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
