import React from "react";
import { connect } from "react-redux";
import * as movieActions from "./operations";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = value => {
    this.setState({ value });
    this.props.searchMovies(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.onChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({
    movieSearch: state.movieSearch
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(SearchBar);
