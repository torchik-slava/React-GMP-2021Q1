import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import MovieDetailsPage from "./layouts/MovieDetailsPage";
import NotFoundPage from "./layouts/NotFoundPage";
import SearchResultPage from "./layouts/SearchResultPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchResultPage} />
        <Route path="/film/:id" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
