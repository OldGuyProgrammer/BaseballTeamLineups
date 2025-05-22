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
  const { name } = player;
  return (
    <div className="card-container">
      <h3>{name}</h3>
    </div>
  );
}
