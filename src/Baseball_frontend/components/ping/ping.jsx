//
// Baseball Roster and Team Organizer
//
// Ping ICP server to see if its running
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { Baseball_backend } from "../../../declarations/Baseball_backend";
import { useEffect } from "react";

export default function Ping() {
  useEffect(() => {
    return async () => {
      const pingText = await Baseball_backend.ping();
      console.log(pingText);
    };
  }, []);
}
