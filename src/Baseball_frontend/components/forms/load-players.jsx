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
  const [fileOfPlayers, setFileOfPlayers] = useState("");
  const { openFilePicker, playerCSV, loading } = useFilePicker({
    accept: "csv",
    onFilesSelected: ({ plainFiles, filesContent, errors }) =>
      // console.log(plainFiles[0].path),
      setFileOfPlayers(plainFiles[0].path),
  });

  // const [playerList, setPlayerList] = useState([]);

  const handleParse = () => {
    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, {
        header: true,
      });
      const parsedData = csv?.data;
      const rows = Object.keys(parsedData[0]);
      const columns = Object.values(parsedData[0]);
      const res = rows.reduce((acc, e, i) => {
        return [...acc, [[e], columns[i]]];
      }, []);
      console.log(res);
      setPlayerList(res);
    };
    reader.readAsText(fileOfPlayers);
  };

  const handleFileChange = () => {
    console.log(playerCSV);
    setFileOfPlayers(playerCSV);
  };

  const handleClick = () => {
    // parseToJSON(playerList);
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
          <SubmitButton label={"Create CSV"} handler={handleParse} />
        )}
      </form>
      {/* <div className="player-list"></div> */}
    </div>
  );
}
