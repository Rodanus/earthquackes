import { React, useEffect, useState } from "react";
import EarthquakeEvents from "../../Components/EarthquakEvents/EarthquakEvents";
import "./Homepage.css";

function Homepage() {
  const [earthquakeEvents, setEarthquakeEvents] = useState({ features: [] });

  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&limit=20"
    )
      .then(res => res.json())
      .then(res => {
        // const timestamp = res.features[0].properties.time;
        // const date = new Date(timestamp);
        // console.log(date);
        setEarthquakeEvents(res);
      });
  }, []);

  return (
    <div>
      <h1 className="homepage-title">Latest Earthquakes:</h1>
      <EarthquakeEvents earthquakeEvents={earthquakeEvents} />
    </div>
  );
}

export default Homepage;
