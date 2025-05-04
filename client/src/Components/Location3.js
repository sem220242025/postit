import React, { useState, useEffect } from "react";

const Location3 = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
        },
        (err) => {
          setError("Permission denied or location unavailable");
        }
      );
    } else {
      setError("Geolocation not supported by your browser");
    }
  }, []);

  return (
    <div>
      <h1>Precise Location</h1>
      {error && <p>{error}</p>}
      {location ? (
        <div>
          <p>
            <strong>Latitude:</strong> {location.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {location.longitude}
          </p>
          <p>
            <strong>Accuracy:</strong> {location.accuracy} meters
          </p>
        </div>
      ) : (
        !error && <p>Getting location...</p>
      )}
    </div>
  );
};

export default Location3;
