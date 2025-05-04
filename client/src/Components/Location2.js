import React, { useEffect, useState } from "react";

const Location2 = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((res) => res.json())
      .then((data) => {
        setLocationData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>My IP Location</h1>
      {loading ? (
        <p>Loading...</p>
      ) : locationData ? (
        <div>
          <p>
            <strong>IP Address:</strong> {locationData.ip}
          </p>
          <p>
            <strong>City:</strong> {locationData.city}
          </p>
          <p>
            <strong>Region:</strong> {locationData.region}
          </p>
          <p>
            <strong>Country:</strong> {locationData.country}
          </p>
          <p>
            <strong>Latitude:</strong> {locationData.latitude}
          </p>

          <p>
            <strong>Longitude:</strong> {locationData.longitude}
          </p>
        </div>
      ) : (
        <p>Failed to load location data.</p>
      )}
    </div>
  );
};

export default Location2;
