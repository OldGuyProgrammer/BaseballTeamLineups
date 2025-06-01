//
// Baseball Roster and Team Organizer
//
// Buttons components
//
// App Function
//
// Old Guy Programmer
// 2025

import { Button } from "react-bootstrap";
import "./buttons.scss";

export default function SubmitButton({ label, handler }) {
  // const { label} = props;

  return (
    <>
      <Button variant="primary" size="lg" onClick={handler}>
        {label}
      </Button>
    </>
  );
}
