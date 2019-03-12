import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { install } from "@material-ui/styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import {
  MovieDetailsContainer,
  MovieListContainer
} from "./modules/movies/components";
import "./index.css";

install();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MovieListContainer} />
        <Route path="movie/:id" component={MovieDetailsContainer} />
      </Route>
    </Router>
    ,
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
