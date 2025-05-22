//
// Baseball Roster and Team Organizer
//
// Button component
//
// App Function
//
// Old Guy Programmer
// 2025

import PlayerList from "../player-list/player-list";
import "./buttons.scss";

export default function Button({ label }) {
  return <button className="button-class">{label}</button>;
}
