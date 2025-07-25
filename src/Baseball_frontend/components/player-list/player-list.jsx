//
// Baseball Roster and Team Organizer
//
// Player List Component
// Iterate throught the list of players and display each card
//
// Old Guy Programmer
// 2025

import Card from "../card/card";

import { Baseball_backend } from "../../../declarations/Baseball_backend";

import "./player-list.scss";
import { useEffect, useState } from "react";
import SubmitButton from "../buttons/buttons";

export default function PlayerList() {
  const [playerList, setPlayerList] = useState([]);

  async function fetchPLayers() {
    const players = await Baseball_backend.getPlayers(teamName);
    setPlayerList(players);
  }

  const deletePlayer = (id) => {
    setPlayerList((prevPlayers) => {
      return prevPlayers.filter((playerItem, index) => {
        return index !== id;
      });
    });
  };

  const [teamName, setTeamName] = useState("");

  return (
    <>
      <label>
        <span>
          Enter team to display, or leave blank to display every player:{" "}
        </span>
        <input
          name="teamName"
          type="text"
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <SubmitButton label={"Get players"} handler={fetchPLayers} />
      <div className="players-container">
        {playerList.map((player, index) => {
          return (
            <Card
              key={index}
              id={index}
              player={player}
              onDelete={deletePlayer}
            />
          );
        })}
      </div>
    </>
  );
}
