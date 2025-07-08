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
import { NavButton } from "../buttons/buttons";
import Title from "../title/title";
import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Baseball_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <>
      <Title title="Baseball Team Lineups" />
      <Link to="/Players">
        <NavButton label="Players" />
      </Link>
      <NavButton label="Teams" />
      <NavButton label="Leagues" />
      <NavButton label="Games" />
      <NavButton label="Help" />
      <Link to="/about">
        <NavButton label="About" />
      </Link>
    </>
  );
}
