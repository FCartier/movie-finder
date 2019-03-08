import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import MovieDetails from "./modules/movies/components/MovieDetails";

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Router>
    ,
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
