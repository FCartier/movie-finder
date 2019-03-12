import React from "react";
import { connect } from "react-redux";
import * as movieActions from "../../actions";
import SearchAppBar from "./SearchAppBar";

class SearchContainer extends React.Component {
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
        <SearchAppBar update={e => this.onChange(e.target.value)} />
      </div>
    );
  }
}

export default connect(
  null,
  { ...movieActions }
)(SearchContainer);
