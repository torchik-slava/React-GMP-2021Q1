import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = React.lazy(() => import("./layouts/HomePage"));
const MovieDetailsPage = React.lazy(() => import("./layouts/MovieDetailsPage"));
const NotFoundPage = React.lazy(() => import("./layouts/NotFoundPage"));
const SearchResultPage = React.lazy(() => import("./layouts/SearchResultPage"));

const App = (): React.ReactElement => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchResultPage} />
          <Route path="/film/:id" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
