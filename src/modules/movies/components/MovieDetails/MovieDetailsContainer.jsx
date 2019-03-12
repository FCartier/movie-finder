import React, { Component } from "react";
import { connect } from "react-redux";
import * as movieActions from "../../actions";

import MovieDetails from "./MovieDetails";

class MovieDetailsContainer extends Component {
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
    return <MovieDetails movie={this.props.movie} />;
  }
}

export default connect(
  state => ({
    movie: state.movieDetails
  }),
  { ...movieActions }
)(MovieDetailsContainer);
