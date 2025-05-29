//
// Baseball Roster and Team Organizer
//
// Menu Bar (Navbar)
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./menubar.scss";

export default function MenuBar() {
  return (
    <>
      <Navbar expand="lg" className="menubar">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Players">
            <NavDropdown.Item href="/players">Player List</NavDropdown.Item>
            <NavDropdown.Item href="/addPlayer">Add Player</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/ping">Ping-Server</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
