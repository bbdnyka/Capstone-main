import React, { useState, useEffect } from "react";
import axios from 'axios';

const TableComponent = () => {
  const [missionHistory, setMissionHistory] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    // Fetch mission history from backend API
    fetchMissionHistory();
  }, []); // Run once on component mount

  const fetchMissionHistory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/missions");
      setMissionHistory(response.data)
      if (!response.ok) {
        throw new Error("Failed to fetch mission history");
      }
      
     
    } catch (error) {
      console.error("Error fetching mission history:", error);
    }
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // const filteredData = missionHistory.filter(
  //   (entry) =>
  //     entry.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     entry.date.toLowerCase().includes(filter.toLowerCase()) ||
  //     entry.status.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h2>Mission History</h2>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Coordinates</th>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Symbol</th>
              </tr>
            </thead>
            <tbody>
              {missionHistory.map((row) => (
                <tr key={row._id} onClick={() => handleEntryClick(row)}>
                  <td style={tableCellStyle}>{row._id}</td>
                  <td style={tableCellStyle}>{row.name}</td>
                  <td style={tableCellStyle}>{row.longitude}:{row.latitude}</td>
                  <td style={tableCellStyle}>{row.date}</td>
                  <td style={tableCellStyle}>{row.symbol}</td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
        {selectedEntry && (
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h2>Mission Information</h2>
            <p>ID: {selectedEntry._id}</p>
            <p>Name: {selectedEntry.name}</p>
            <p>Date: {selectedEntry.createdAt}</p>
            <p>Status: {selectedEntry.updatedAt}</p>
            <p>Description: {selectedEntry.description}</p>
            <a href="./MissionPlanner"> edit mission </a>
          </div>
        )}
      </div>
    </div>
  );
};

const tableStyle = {
  borderCollapse: "collapse",
  width: "60vw",
};

const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

export default TableComponent;
