//
// Baseball Roster and Team Organizer
//
// Add a new player
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { useState } from "react";

export default function AddPlayer() {
  const [playerName, setPlayerName] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    switch (event.target.name) {
      case "playerName":
        setPlayerName(event.target.value);
        break;
      case "curretTeam":
        setCurrentTeam(event.target.value);
        break;
      case "jerseyNumber":
        setJerseyNumber(event.target.value);
        break;
    }
  }

  return (
    <>
      <h3>Add a new player</h3>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Baseball Player"
        value={playerName}
        name="playerName"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Team name"
        value={currentTeam}
        name="curretTeam"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Jersey Number"
        value={jerseyNumber}
        name="jerseyNumber"
      />
    </>
  );
}
