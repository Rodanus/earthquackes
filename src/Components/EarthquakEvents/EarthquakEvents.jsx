import React from "react";
import EarthquakeEvent from "./EarthquakeEvent";
import "./EarthquakeEvents.css";

function EarthquakeEvents(props) {
  return (
    <div>
      <ul className="latest-earthquakes-list">
        {props.earthquakeEvents.features.map(element => (
          <EarthquakeEvent
            key={element.properties.place}
            place={element.properties.place}
            time={element.properties.time}
          />
        ))}
      </ul>
    </div>
  );
}

export default EarthquakeEvents;
