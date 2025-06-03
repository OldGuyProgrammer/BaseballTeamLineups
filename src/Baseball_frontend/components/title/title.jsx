//
// Baseball Roster and Team Organizer
//
// Home Component Component
// Initial Landing Page
//
// Old Guy Programmer
// 2025

import "./title.scss";
import "../../../fonts/RoosterPersonalUse-3z8d8.ttf";

export default function Title({ title }) {
  return (
    <div className="title-text limit-min">
      <span>{title}</span>
    </div>
  );
}
