//
// Baseball Roster and Team Organizer
//
// Load players from .CSV file.
// Users can get a team roster in a spreadsheet format.
//      Convert it to .CSV
//      Examine it.
//      Load it to the ICP database
//
// Old Guy Programmer
// 2025

import { useState } from "react";
import { usePapaParse } from "react-papaparse";
import "./forms.scss";
import SubmitButton from "../buttons/buttons";
import Card from "../card/card";

export default function LoadPlayers() {
  const [playerText, setPlayerText] = useState("");
  const [playerList, setPlayerList] = useState(null);
  const { readString } = usePapaParse();

  const handleParse = () => {
    readString(playerText, {
      delimiter: ",",
      header: true,
      complete: (results) => {
        setPlayerList(results.data);
      },
      error: (errMsg) => {
        alert("Parsing Error: " + errMsg.message);
      },
    });
  };

  const handleChange = (e) => {
    setPlayerText(e.target.value);
  };
  // TODO
  // Copy code from player list screen that removes a player card.

  return (
    <div className="form-container">
      <form>
        <h1 className="display-1">Load Players From a .CSV file</h1>
        <p>
          Enter a list of players, one on each line using the following format:
        </p>
        <strong>Name, Jersey Number, Team Name</strong>
        <ul>
          <li>The name can have any number of parts separated by a space.</li>
          <li>
            Jersey Numeber is he number the player will wear when playing for
            this team.
          </li>
          <li>
            Team name can have any number of parts like city and name separated
            by a space, for example Toledo Mud Hens.
          </li>
          <li>
            {" "}
            Commas are not allowed other than to delineate between Player Name,
            Jesey number and Team Name
          </li>
        </ul>
        <textarea name="inputPlayerList" onChange={handleChange} />
        {/* <h1 className="display-2">New players from file</h1> */}
        <SubmitButton label={"Load Player List"} handler={handleParse} />
      </form>
      {playerList &&
        playerList.map((player) => {
          return <Card key={player.jeseyNumber} player={player} />;
        })}
    </div>
  );
}
