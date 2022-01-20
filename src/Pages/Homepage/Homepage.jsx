import { React, useEffect, useState } from "react";
import EarthquakeEvents from "../../Components/EarthquakEvents/EarthquakEvents";
import "./Homepage.css";

function Homepage() {
  const [earthquakeEvents, setEarthquakeEvents] = useState({ features: [] });

  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&limit=8"
    )
      .then(res => res.json())
      .then(res => {
        setEarthquakeEvents(res);
      });
  }, []);

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Latest Earthquakes:</h1>
      <EarthquakeEvents earthquakeEvents={earthquakeEvents} />
    </div>
  );
}

export default Homepage;
