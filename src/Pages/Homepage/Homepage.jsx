import { React, useEffect, useState } from "react";
import EarthquakeEvents from "../../Components/EarthquakEvents/EarthquakEvents";
import "./Homepage.css";

function Homepage() {
  const [earthquakeEvents, setEarthquakeEvents] = useState({ features: [] });
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&limit=8"
    )
      .then(res => res.json())
      .then(res => {
        setEarthquakeEvents(res);
      })
      .then(() => setIsContentLoaded(true));
  }, []);

  return (
    <div className="homepage-container">
      <div className={isContentLoaded ? "loading hide-loading" : "loading"}>
        Loading... (Might take up to a minute)
      </div>
      <h1 className="homepage-title">Latest Earthquakes:</h1>
      <EarthquakeEvents earthquakeEvents={earthquakeEvents} />
    </div>
  );
}

export default Homepage;
