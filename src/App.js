import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
      </Switch>
    </>
  );
}

export default App;
