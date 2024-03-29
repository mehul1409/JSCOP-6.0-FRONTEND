// WebTeamComponent.js
import React from "react";
import Webteam from "../../Pages/Webteam/Webteam"; // Import the Webteam component
import WebTeamData from "../../oldassets/Data/WebTeamdata"; // Import the WebTeamData array
import './WebteamComponent.css';

const WebTeamComponent = () => {
  return (
    <div id="webteam">
      <div className="webteamheading">
        <h1>OUR WEB TEAM</h1>
      </div>
      <div className="webteam-container">
        {/* Map over the WebTeamData array and render a Webteam component for each member */}
        {WebTeamData.map((member, index) => (
          <Webteam key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default WebTeamComponent;
