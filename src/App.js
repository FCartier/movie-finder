import React, { Component } from "react";
import "./App.css";
import { MovieBrowser } from "./modules/movies";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MovieBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
