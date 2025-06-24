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
import { useFilePicker } from "use-file-picker";
import { Button, FormLabel } from "react-bootstrap";
import "./forms.scss";
import SubmitButton from "../buttons/buttons";
import Papa from "papaparse";

export default function LoadPlayers() {
  const { openFilePicker, filesContent, loading } = useFilePicker({
    accept: "csv",
  });
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const [fileName, setFileName] = useState("");
  function parseToJSON(file) {
    console.log(file);
    Papa.parse(file, {
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

  function handleClick() {
    console.log(fileName.content);
    parseToJSON(fileName);
  }

  return (
    <form>
      <p className="limit-min">Load Players From a .CSV file</p>
      <FormLabel htmlFor="playerName">Player File Name</FormLabel>
      <Button onClick={() => openFilePicker()}>Select File of Players</Button>
      {!fileName &&
        filesContent.map((fileName, index) => setFileName(fileName))}
      {fileName && <SubmitButton label={"Create CSV"} handler={handleClick} />}
    </form>
  );
}
