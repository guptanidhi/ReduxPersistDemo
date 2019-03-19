import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App.jsx";
import PageNotFound from "./components/PageNotFound";
import MainPage from "./containers/MainPage";

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
    </Route>
    <Route path="/404" component={PageNotFound} />
    <Route path="/500" component={PageNotFound} />
  </div>
);
