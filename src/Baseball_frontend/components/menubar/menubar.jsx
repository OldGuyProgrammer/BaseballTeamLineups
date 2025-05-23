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
    <div className="menubar">
      <a href="/">Home</a>
      <a href="/players">Players</a>
      <a href="/about">About</a>
      <a href="/ping">Ping Server</a>
    </div>
  );
}
