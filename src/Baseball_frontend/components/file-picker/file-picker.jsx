//
// Baseball Roster and Team Organizer
//
// File Picker
// Component to encapsulate the <input> HTML type="file"
//
// Old Guy Programmer
// 2025

import "./file-picker.scss";

const FilePicker = ({ label, handler }) => {
  return (
    <>
      <label className="filepicker" for="filePicker">
        Select File of Players
      </label>
      <input
        type="file"
        id="filePicker"
        name="filePicker"
        accept=".csv"
        onChange={handler}
      />
    </>
  );
};

export default FilePicker;
