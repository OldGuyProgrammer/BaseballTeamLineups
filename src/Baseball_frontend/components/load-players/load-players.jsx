//
// Baseball Roster and Team Organizer
//
// Load players from .CSV data.
//      Examine it.
//      Load it to the ICP database
//
// Old Guy Programmer
// 2025

import { useState } from "react";
import { usePapaParse } from "react-papaparse";
import "./load-players.scss";
import SubmitButton from "../buttons/buttons";
import { InlineCard } from "../card/card";
import { Baseball_backend } from "../../../declarations/Baseball_backend";

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
        console.log(errMsg.message);
        alert("Parsing Error: " + errMsg.message);
      },
    });
  };

  const handleChange = (e) => {
    setPlayerText(e.target.value);
  };

  const handleSave = () => {
    playerList.map((player) => {
      console.log(
        player.playerName + " " + player.playerTeam + " " + player.jerseyNumber
      );
      Baseball_backend.savePlayer(
        player.playerName,
        player.jerseyNumber,
        player.playerTeam
      );
    });
  };

  const deletePlayer = (id) => {
    setPlayerList((prevPlayers) => {
      return prevPlayers.filter((playerItem, index) => {
        return index !== id;
      });
    });
  };

  const displayPlayers = () => {
    return playerList.map((player, index) => {
      return (
        <InlineCard
          key={index}
          id={index}
          player={player}
          onDelete={deletePlayer}
        />
      );
    });
  };

  const displayTextArea = () => {
    return (
      <div className="player-list-area">
        <div className="input-area">
          <div>
            <textarea name="inputPlayerList" onChange={handleChange} />
          </div>
          <div>
            <SubmitButton
              className="btn"
              label={"Load Player List"}
              handler={handleParse}
            />
          </div>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="help-container">
        <h1>
          Enter a list of players, one on each line using the following format:
        </h1>
        <p>
          <strong>teamName, playerName, jerseyNumber</strong>
          <br />
          For this release, please use these column headers. In the future, you
          will be able to specify your own.
        </p>
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
            Commas are not allowed other than to delineate between Player Name,
            Jesey number and Team Name
          </li>
        </ul>
      </div>
      {!playerList && displayTextArea()}
      <div className="players-list">
        {playerList && (
          <SubmitButton
            className="btn"
            label={"Save Player List"}
            handler={handleSave}
          />
        )}
        {playerList && displayPlayers()}
      </div>
    </>
  );
}
