import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as movieActions from "../operations";

import MovieDetailsPage from "../components/MovieDetailsPage";

class MovieDetails extends Component {
  componentDidMount() {
    const movieId = this.props.routeParams.id;
    this.props.getMovieDetails(movieId);
  }

  componentWillReceiveProps(nextProps) {
    const currentMovieId = this.props.routeParams.id;
    const nextMovieId = nextProps.routeParams.id;

    if (currentMovieId !== nextMovieId) {
      this.props.getMovieDetails(nextMovieId);
    }
  }

  render() {
    return <MovieDetailsPage movie={this.props.movie} />;
  }
}

export default connect(
  state => ({
    movie: state.movieDetails
  }),
  { ...movieActions }
)(MovieDetails);
