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
      <h3>{playerName}</h3>
    </div>
  );
}
