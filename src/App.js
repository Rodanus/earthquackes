import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details/Details";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
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
