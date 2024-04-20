import { useState } from "react";
import { Cartesian3 } from "cesium";
import axios from 'axios';

function Modal({ position, onUpdatePosition, onClose }) {
  const [newPosition, setNewPosition] = useState({
    lat: position.latitude,
    lon: position.longitude,
  });

  const [missionDetails, setMissionDetails] = useState({
    name: "",
    date: "",
    //symbol: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'symbol') {
      addBillboard(value); 
    }
    setMissionDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePositionChange = (e) => {
    const { name, value } = e.target;
    setNewPosition((prevPosition) => ({
      ...prevPosition,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCartesianPosition = Cartesian3.fromDegrees(
      newPosition.lon,
      newPosition.lat
    );
    onUpdatePosition(newCartesianPosition);

    const missionData = {
      name: missionDetails.name,
      date: missionDetails.date,
      symbol: missionDetails.symbol,
      latitude: newPosition.lat,
      longitude: newPosition.lon,
    };

    try {
      const response = await axios.post("http://localhost:3000/missions", {//add api name here
        name: missionDetails.name,
        date: missionDetails.date,
        symbol: missionDetails.symbol,
        latitude: newPosition.lat,
        longitude: newPosition.lon,

      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to save mission");
      }
      //alert("Mission saved successfully");
    } catch (error) {
      console.error("Error saving mission:", error.message);
      //alert("Failed to save mission");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        right: 50,
        width: "350px",
        padding: "20px",
        color: 'green'
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ padding: "20px" }}>
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            &times;
          </span>
          <h2>Update Billboard Position</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Latitude:
              <input
                type="number"
                name="lat"
                value={newPosition.lat}
                onChange={handlePositionChange}
              />
            </label>
            <label>
              Longitude:
              <input
                type="number"
                name="lon"
                value={newPosition.lon}
                onChange={handlePositionChange}
              />
            </label>
            <div>
              <label>
                Mission Name:
                <input
                  type="text"
                  name="name"
                  value={missionDetails.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input
                  type="text"
                  name="date"
                  value={missionDetails.date}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Save Mission</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
