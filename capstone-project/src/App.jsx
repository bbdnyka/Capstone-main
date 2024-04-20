/*import "./App.css";
import Sidebar from './components/Sidebar';
import { Viewer } from "resium";
*/

/*function App(){
  return (
  <div className="App">
    {/* <Sidebar /> */
/* <Viewer/> */

/*  
    <Sidebar/>
  </div>
  
  );

}

export default App;
*/
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.jsx";
import Help from "./pages/Help.jsx";
import Map from "./pages/map.jsx";
import MissionHistory from "./pages/missionhistory.jsx";
import MissionPlanner from "./pages/MissionPlanner.jsx";
import Account from "./pages/Account.jsx";
import Information from "./pages/Information.jsx";
import MissionDirectory from "./components/plan/MissionDirectory";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/MissionHistory" element={<MissionHistory />} />
          <Route path="/MissionPlanner" element={<MissionPlanner />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Information" element={<Information />} />
          <Route exact path="/" component={MissionDirectory} />
          <Route path="/Information/:missionId" component={Information} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
