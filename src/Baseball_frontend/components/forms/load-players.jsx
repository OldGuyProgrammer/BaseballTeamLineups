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
  const { openFilePicker, playerCSV, loading } = useFilePicker({
    accept: "csv",
    onFilesSelected: ({ plainFiles, filesContent, errors }) =>
      // console.log(plainFiles[0].path),
      setFileOfPlayers(plainFiles[0].path),
  });

  const [playerList, setPlayerList] = useState([]);

  const handleParse = () => {
    // TODO
    // Put error checking in.
    // Check to see if user cancelled.

    Papa.parse(fileOfPlayers, {
      delimiter: ",",
      download: true,
      header: true,
      complete: (results) => {
        setPlayerList(results.data);
        console.log(results.data);
        console.log(playerList);
      },
    });
  };

  return (
    <div className="form-container">
      <form>
        <p className="limit-min">Load Players From a .CSV file</p>
        <Button onClick={() => openFilePicker()}>Select File of Players</Button>
        {fileOfPlayers && (
          <FormLabel htmlFor="playerName">
            Player File Name: {fileOfPlayers}
          </FormLabel>
        )}
        {fileOfPlayers && (
          <SubmitButton label={"Load Player List"} handler={handleParse} />
        )}
      </form>
      {playerList && (
        <div className="player-list">
          <p className="limit-min">New players from file.</p>
          {playerList.map((player) => {
            return <Card player={player} key={player.jerseyNumber} />;
          })}
        </div>
      )}
      );
    </div>
  );
}
