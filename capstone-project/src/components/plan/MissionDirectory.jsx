import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const MissionDirectoryWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MissionCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const MissionName = styled.h2`
  margin-top: 0;
`;

const SeeMissionLink = styled.a`
  background-color: #007bff;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MissionDirectory = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // Fetch missions from backend API
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    try {
      const response = await axios.get("http://localhost:3000/missions");
      
      setMissions(response.data);
      if (!response.ok) {
        throw new Error("Failed to fetch missions");
      }
      
    } catch (error) {
      console.error("Error fetching missions:", error);
    }
  };

  return (
    <MissionDirectoryWrapper>
      <SearchBar type="text" placeholder="Search..." />
      {missions.map((mission) => (
        <MissionCard key={mission._id}>
          <MissionName>{mission.naame}</MissionName>
          <p>Status: {mission.createdAt}</p>
          <p>{mission.updatedAt}</p>
          
        </MissionCard>
      ))}
    </MissionDirectoryWrapper>
  );
};

export default MissionDirectory;
