import React from "react";
import { connect } from "react-redux";
import * as movieActions from "../operations";

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
  null,
  { ...movieActions }
)(SearchBar);
