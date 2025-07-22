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
import AddPlayer from "../components/add-player/add-player";
import LoadPlayers from "../components/load-players/load-players";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          <Route path="/about" element={<About />} />
          <Route path="/ping" element={<Ping />} />
          <Route path="/loadplayers" element={<LoadPlayers />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
