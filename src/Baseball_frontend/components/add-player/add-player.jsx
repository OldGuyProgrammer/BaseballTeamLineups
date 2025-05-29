//
// Baseball Roster and Team Organizer
//
// Add a new player
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { useState } from "react";
import "./add-player.scss";

import { Baseball_backend } from "../../../declarations/Baseball_backend";

export default function AddPlayer() {
  const [playerName, setPlayerName] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("");

  function handleChange(event) {
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

  function handleClick() {
    Baseball_backend.savePlayer(playerName, jerseyNumber, currentTeam);
  }

  return (
    <>
      <form>
        <h3>Add a New Player</h3>
        <label htmlFor="playerName">Player Name</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Baseball Player"
          value={playerName}
          name="playerName"
          id="playerName"
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
        <button type="submit" onClick={handleClick}>
          Add Player
        </button>
      </form>
    </>
  );
}
