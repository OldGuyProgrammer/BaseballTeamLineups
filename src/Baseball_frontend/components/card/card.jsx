//
// Baseball Roster and Team Organizer
//
// Card component
//
//
// Old Guy Programmer
// 2025

import "./card.scss";

export default function Card({ player }) {
  const { playerName, jerseyNumber, playerTeam } = player;
  return (
    <div className="card-container">
      {console.log(player)}
      <h2>{playerName}</h2>
      <h3>{playerTeam}</h3>
      <h3>{jerseyNumber}</h3>
    </div>
  );
}
