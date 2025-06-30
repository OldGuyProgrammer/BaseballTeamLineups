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
import Papa from "papaparse";
import "./forms.scss";
import SubmitButton from "../buttons/buttons";
import Card from "../card/card";

export default function LoadPlayers() {
  const [fileOfPlayers, setFileOfPlayers] = useState(null);
  const [playerList, setPlayerList] = useState(null);
  const { openFilePicker, playerCSV, loading } = useFilePicker({
    accept: "csv",
    onFilesSelected: ({ plainFiles, filesContent, errors }) => {
      setFileOfPlayers(plainFiles[0].path);
      setPlayerList(null);
    },
  });

  const handleParse = () => {
    Papa.parse(fileOfPlayers, {
      delimiter: ",",
      download: true,
      header: true,
      complete: (results) => {
        setPlayerList(results.data);
      },
      error: (errMsg) => {
        alert("Parsing Error: " + errMsg.message);
      },
    });
  };

  // TODO
  // Copy code from player list screen that removes a player card.

  return (
    <div className="form-container">
      <h1 className="display-1">Load Players From a .CSV file</h1>
      <form>
        <Button onClick={() => openFilePicker()}>Select File of Players</Button>
        {fileOfPlayers && (
          <h1 className="display-2">Player File Name: {fileOfPlayers}</h1>
        )}
        {fileOfPlayers && (
          <SubmitButton label={"Load Player List"} handler={handleParse} />
        )}
      </form>
      {playerList && (
        <>
          <h1 className="display-2">New players from file</h1>
          <div className="player-list">
            {playerList.map((player) => {
              return <Card key={player.jerseyNumber} player={player} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
