//
// Baseball Roster and Team Organizer
//
// App Function
//
// Old Guy Programmer
// 2025// Baseball Roster and Team Organizer
//

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/home/home";
import About from "../components/about/about";
import PlayerList from "../components/player-list/player-list";
import Ping from "../components/ping/ping";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/players" element={<PlayerList />} />
          <Route path="/about" element={<About />} />
          <Route path="/ping" element={<Ping />} />
        </Routes>
      </Router>
    </>
  );
}
