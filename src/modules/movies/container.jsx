import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import * as movieHelpers from "./helpers";
import * as movieActions from "./operations";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import chooseMovieList from "./selectors";

class MovieBrowser extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.popularMovies === nextProps.popularMovies) {
      return false;
    } else {
      return true;
    }
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
  state => ({
    popularMovies: chooseMovieList(state)
  }),
  { ...movieActions }
)(MovieBrowser);
