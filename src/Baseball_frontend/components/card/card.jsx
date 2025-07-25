//
// Baseball Roster and Team Organizer
//
// Card component
//
//
// Old Guy Programmer
// 2025

import "./card.scss";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ player, onDelete, id }) => {
  const { playerName, jerseyNumber, playerTeam } = player;

  return (
    <div className="card-container">
      <h2>{playerName}</h2>
      <h3>{playerTeam}</h3>
      <h3>{jerseyNumber}</h3>
      <FaRegTrashAlt className="trashCan" onClick={() => onDelete(id)} />
    </div>
  );
};

const InlineCard = ({ player, onDelete, id }) => {
  const { playerName, jerseyNumber, playerTeam } = player;
  return (
    <>
      <p>
        <FaRegTrashAlt className="trashCan" onClick={() => onDelete(id)} />
        {playerName} {playerTeam} {jerseyNumber}
      </p>
    </>
  );
};

export default Card;
export { InlineCard };
