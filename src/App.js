import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
