//
// Baseball Roster and Team Organizer
//
// Menu Bar (Navbar)
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import "./menubar.scss";

export default function MenuBar() {
  return (
    <nav className="menubar">
      <div className="mainDiv">
        <a href="/">Home</a>
        <a href="/players">Players</a>
        <ul className="dropdown">
          <a>Player List</a>
          <a href="/addPlayer">Add Player</a>
        </ul>
        <a href="/about">About</a>
        <a href="/ping">Ping Server</a>
      </div>
    </nav>
  );
}
