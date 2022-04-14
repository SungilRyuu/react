import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import MyPage from "./components/pages/MyPage";
import Today from "./components/pages/Today";
import Top100 from "./components/pages/Top100";
import Recent from "./components/pages/Recent";
import Stored from "./components/pages/Stored";
import Algorithm from "./components/pages/Algorithm";
import Mood from "./components/pages/Mood";
import Playlist1 from "./components/pages/Playlist1";
import Playlist2 from "./components/pages/Playlist2";
import Playlist3 from "./components/pages/Playlist3";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/mypage" exact component={MyPage} />
      <Route path="/today" exact component={Today} />
      <Route path="/top100" exact component={Top100} />
      <Route path="/recent" exact component={Recent} />
      <Route path="/stored" exact component={Stored} />
      <Route path="/algorithm" exact component={Algorithm} />
      <Route path="/mood" exact component={Mood} />
      <Route path="/playlist1" exact component={Playlist1} />
      <Route path="/playlist2" exact component={Playlist2} />
      <Route path="/playlist3" exact component={Playlist3} />
    </Router>
  );
}

export default App;
