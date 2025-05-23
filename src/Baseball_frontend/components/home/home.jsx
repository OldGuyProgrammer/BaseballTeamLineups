//
// Baseball Roster and Team Organizer
//
// Home Component Component
// Initial Landing Page
//
// Old Guy Programmer
// 2025

import { useState } from "react";
import { Baseball_backend } from "declarations/Baseball_backend";
import Button from "../buttons/buttons";
import Title from "../title/title";
import { Link } from "react-router-dom";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Baseball_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  } // Baseball Roster and Team Organizer
  //

  return (
    <main>
      <Title />
      <div>
        <Link to="/Players">
          <Button label="Players" />
        </Link>
        <Button label="Teams" />
        <Button label="Leagues" />
        <Button label="Games" />
        <Button label="Help" />
        <Link to="/about">
          <Button label="About" />
        </Link>
      </div>
    </main>
  );
}
