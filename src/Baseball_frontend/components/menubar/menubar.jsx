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
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Players">
            <NavDropdown.Item href="/players" className="dropdown">
              Player List
            </NavDropdown.Item>
            <NavDropdown.Item href="/addPlayer" className="dropdown">
              Add Player
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/ping">Ping-Server</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
