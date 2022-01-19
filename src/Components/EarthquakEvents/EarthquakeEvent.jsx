import React, { useEffect, useState } from "react";
import "./EarthquakeEvent.css";

function EarthquakeEvent(props) {
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {}, [props.EarthquakeEvent]);

  return (
    <li>
      <h2 className="earthquake-place">{props.place}</h2>
      <h3>on {eventDate}</h3>
    </li>
  );
}

export default EarthquakeEvent;
