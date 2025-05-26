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
  // const players = [
  //   { name: "Jackie Robinson", id: "1" },
  //   { name: "Mickey Mantle", id: "2" },
  //   { name: "Earnie Banks", id: "3" },
  //   { name: "Louis Aparicio", id: "4" },
  //   { name: "Jim Landis", id: "5" },
  // ];

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    return async () => {
      const players = await Baseball_backend.getPlayers();
      // JSON.parse(players.replace("'", '"'));
      players.map((player) => {
        console.log("player list to follow");
        console.log(player);
      });
      setPlayerList(players);
    };
  }, []);

  return (
    <div className="player-list">
      {playerList.map &&
        playerList.map((data) => {
          {
            console.log(data);
          }
          return <h3>Name Goes Here</h3>;
        })}
      {/* {players.map((player) => {
        return <Card player={player} key={player.id} />;
      })} */}
    </div>
  );
}
