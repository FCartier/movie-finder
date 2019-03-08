import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import * as movieHelpers from "./helpers";
import * as movieActions from "./operations";
import MovieList from "./MovieList";
import Search from "./Search";
import chooseMovieList from "./selectors";

class MovieBrowser extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.popularMovies);
    return this.props.popularMovies !== nextProps.popularMovies;
  }

  render() {
    const { popularMovies } = this.props;
    const movies = movieHelpers.getMoviesList(popularMovies.response);

    return (
      <div>
        <Container>
          <Row>
            <Search />
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
    popularMovies:
      state.movieSearch.length > 0 ? state.movieSearch : state.popularMovies
  }),
  // Map action creators to properties of our component
  { ...movieActions }
)(MovieBrowser);
