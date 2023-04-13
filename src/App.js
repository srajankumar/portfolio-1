import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Arts from "./components/Arts";

function App() {
  return (
    <main>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/arts">
          <Arts />
        </Route>
      </Router>
    </main>
  );
}

export default App;
