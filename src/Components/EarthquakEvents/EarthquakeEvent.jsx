import React, { useEffect, useState } from "react";
import "./EarthquakeEvent.css";

function EarthquakeEvent(props) {
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    if (props.time) {
      const time = props.time;
      const date = new Date(time);

      setEventDate(date.toLocaleString());
    }
  }, [props.time]);

  return (
    <li className="earthquake-event-list-element">
      <h2 className="earthquake-place">{props.place}</h2>
      <h3 className="earthquake-time">on {eventDate}</h3>
    </li>
  );
}

export default EarthquakeEvent;
