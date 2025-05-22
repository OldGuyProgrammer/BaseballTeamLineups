//
// Baseball Roster and Team Organizer
//
// Menu Bar (Navbar)
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export default function MenuBar() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}
