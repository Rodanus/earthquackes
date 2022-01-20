import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const [eventDetails, setEventDetails] = useState({});
  const [eventDate, setEventDate] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`
    )
      .then(res => res.json())
      .then(res => {
        const { title, eventtime, magnitude, latitude, longitude } =
          res.properties.products.origin[0].properties;
        const eventDate = new Date(eventtime);
        setEventDate(eventDate.toLocaleString());
        setEventDetails({ title, magnitude, latitude, longitude });
      });
  }, []);

  return (
    <div className="details-container">
      <div>
        <h1 className="event-details-title">{eventDetails.title}</h1>
        <h2 className="event-details-date">{eventDate}</h2>

        <div className="event-extra-details">
          <div className="event-extra-detail">
            <h3 className="event-extra-detail-title">magnitude</h3>
            <h4 className="event-extra-detail-value">
              {eventDetails.magnitude}
            </h4>
          </div>
          <div className="event-extra-detail">
            <h3 className="event-extra-detail-title">latitude</h3>
            <h4 className="event-extra-detail-value">
              {eventDetails.latitude}
            </h4>
          </div>
          <div className="event-extra-detail">
            <h3 className="event-extra-detail-title">longitude</h3>
            <h4 className="event-extra-detail-value">
              {eventDetails.longitude}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
