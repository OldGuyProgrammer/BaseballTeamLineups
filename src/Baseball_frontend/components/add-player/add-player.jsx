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
import { FormLabel, Button } from "react-bootstrap";

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
        <FormLabel htmlFor="playerName">Player Name</FormLabel>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Player Name"
          value={playerName}
          name="playerName"
          id="playerName"
        />
        <FormLabel htmlFor="curretTeam">Team</FormLabel>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Team"
          value={currentTeam}
          name="curretTeam"
        />
        <FormLabel htmlFor="jerseyNumber">Jersey Number</FormLabel>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Jersey Number"
          value={jerseyNumber}
          name="jerseyNumber"
        />
        <Button variant="primary" size="lg" onClick={handleClick}>
          Add Player
        </Button>
      </form>
    </>
  );
}
