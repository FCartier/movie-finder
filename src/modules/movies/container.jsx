import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import * as movieActions from "./operations";
import * as movieHelpers from "./helpers";
import MovieList from "./MovieList";

class MovieBrowser extends React.Component {
  componentDidMount() {
    this.props.fetchMovies(1);
  }

  render() {
    const { popularMovies } = this.props;
    const movies = movieHelpers.getMoviesList(popularMovies.response);

    return (
      <div>
        <Container>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList movies={movies} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  // Map nodes in our state to a properties of our component
  state => ({
    popularMovies: state.popularMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);
