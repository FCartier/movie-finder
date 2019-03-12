import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import * as movieHelpers from "../../common/helpers";
import * as movieActions from "../../actions";
import MovieList from "./MovieList";
import chooseMovieList from "../../selectors";

class MovieListContainer extends React.Component {
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
)(MovieListContainer);
