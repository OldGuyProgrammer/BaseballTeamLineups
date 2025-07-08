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

export default function PlayerList() {
  const [playerList, setPlayerList] = useState([]);

  async function fetchPLayers() {
    const players = await Baseball_backend.getPlayers();
    setPlayerList(players);
  }

  useEffect(() => {
    fetchPLayers();
  }, []);

  const deletePlayer = (id) => {
    setPlayerList((prevPlayers) => {
      return prevPlayers.filter((playerItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="player-list">
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
  );
}
