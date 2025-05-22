//
// Baseball Roster and Team Organizer
//
// Player List Component
// Iterate throught the list of players and display each card
//
// Old Guy Programmer
// 2025

import { useState } from "react";
import Card from "../card/card";
import "./player-list.scss";

export default function PlayerList() {
  const players = [
    { name: "Jackie Robinson", id: "1" },
    { name: "Mickey Mantle", id: "2" },
    { name: "Earnie Banks", id: "3" },
    { name: "Louis Aparicio", id: "4" },
    { name: "Jim Landis", id: "5" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="player-list">
      {players.map((player) => {
        return <Card player={player} key={player.id} />;
      })}
    </div>
  );
}
