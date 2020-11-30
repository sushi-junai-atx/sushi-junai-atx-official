import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import Menu from "./pages/Menu";
import Choice from "./pages/Choice";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/alacarte" component={Alacarte}/>
          <Route exact path="/menu" component={Menu}/> 
          <Route exact path="/choice" component={Choice}/>
    </Router>
  );
}

export default App;
