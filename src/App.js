import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/404NotFound";
import Main from "./components/Main";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Header title="Github Search" />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/users/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
