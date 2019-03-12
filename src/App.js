import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { SearchAppBarContainer } from "./modules/movies/components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchAppBarContainer />
        </div>
        <div>{this.props.children}</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
