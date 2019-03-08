import React, { Component, PropTypes } from "react";

class MovieDetailsPage extends Component {
  render() {
    const { original_title = "" } = this.props.movie;
    console.log(original_title);
    return original_title;
  }
}

export default MovieDetailsPage;
