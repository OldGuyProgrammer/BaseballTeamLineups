//
// Baseball Roster and Team Organizer
//
// Add a new player
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { useState } from "react";
import "./forms.scss";

import { Baseball_backend } from "../../../declarations/Baseball_backend";
import { FormLabel } from "react-bootstrap";
import SubmitButton from "../buttons/buttons";
import Title from "../title/title";

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
    setPlayerName("");
    setCurrentTeam("");
    setJerseyNumber("");
  }

  return (
    <div className="form-container">
      <form>
        {/* <div className="form-group"> */}
        <Title title="Add a New Player" />
        <div>
          <FormLabel htmlFor="playerName">Player Name</FormLabel>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Player Name"
            value={playerName}
            name="playerName"
            id="playerName"
          />
        </div>
        <div>
          <FormLabel htmlFor="curretTeam">Team</FormLabel>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Team"
            value={currentTeam}
            name="curretTeam"
          />
        </div>
        <div>
          <FormLabel htmlFor="jerseyNumber">Jersey Number</FormLabel>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Jersey Number"
            value={jerseyNumber}
            name="jerseyNumber"
          />
        </div>
        <SubmitButton label={"Add Player"} handler={handleClick} />
      </form>
    </div>
  );
}
