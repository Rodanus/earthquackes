import React from "react";
import EarthquakeEvent from "./EarthquakeEvent";
import "./EarthquakeEvents.css";

function EarthquakeEvents(props) {
  return (
    <div className="earthquake-events-container">
      <ul className="latest-earthquakes-list">
        {props.earthquakeEvents.features.map(element => (
          <EarthquakeEvent
            key={element.id}
            place={element.properties.place}
            time={element.properties.time}
            id={element.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default EarthquakeEvents;
