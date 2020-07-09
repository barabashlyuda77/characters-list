import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CharactersListPage from "../../pages/CharactersListPage/CharactersListPage";
import ViewCharacterPage from "../../pages/ViewCharacterPage/ViewCharacterPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharactersListPage />
        </Route>
        <Route path="/details/:id">
          <ViewCharacterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
