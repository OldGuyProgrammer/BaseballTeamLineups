//
// Baseball Roster and Team Organizer
//
// Load players from .CSV file.
// Users can get a team roster in a spreadsheet format.
//      Convert it to .CSV
//      Examine it.
//      Load it to the ICP database
//
// Old Guy Programmer
// 2025

import { useState } from "react";
import { FormLabel } from "react-bootstrap";
import "./forms.scss";
import SubmitButton from "../buttons/buttons";
import Papa from "papaparse";

export default function LoadPlayers() {
  function parseToJSON(file) {
    console.log(file);
    Papa.parse("../../../src/Baseball", {
      delimiter: ",",
      header: true,
      complete: function (results) {
        console.log(JSON.stringify(results));
      },
      error: function (error) {
        console.error("Error parsing CSV", error);
      },
    });
  }

  const [fileName, setFileName] = useState("");

  function handleChange(event) {
    setFileName(event.target.value);
  }

  function handleClick() {
    parseToJSON(fileName);
  }

  return (
    <form>
      <p className="limit-min">Load Players From a .CSV file</p>
      <FormLabel htmlFor="playerName">Player File Name</FormLabel>
      <input
        onChange={handleChange}
        type="file"
        placeholder="File Name"
        value={fileName}
        name="Choose File Name"
        id="fileName"
      />
      <SubmitButton label={"Select File"} handler={handleClick} />
    </form>
  );
}
