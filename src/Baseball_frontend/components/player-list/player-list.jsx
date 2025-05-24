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
  const players = [
    { name: "Jackie Robinson", id: "1" },
    { name: "Mickey Mantle", id: "2" },
    { name: "Earnie Banks", id: "3" },
    { name: "Louis Aparicio", id: "4" },
    { name: "Jim Landis", id: "5" },
  ];

  const [playerList, setPlayerList] = useState("");

  useEffect(() => {
    return async () => {
      setPlayerList(await Baseball_backend.getPlayers());
    };
  }, []);

  return (
    <div className="player-list">
      <p>{typeof playerList}</p>
      {playerList.map((data, key) => {
        return data.name;
      })}
      {/* {players.map((player) => {
        return <Card player={player} key={player.id} />;
      })} */}
    </div>
  );
}
