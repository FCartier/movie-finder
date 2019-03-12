import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fixPosterPath } from "../../common/helpers";
import styles from "./MovieDetails.styled";

class MovieDetails extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <Container style={styles.container}>
        <Row justify-content-md-center>
          <Col xs={12} sm={4} md={4} lg={4}>
            <img
              style={styles.bgImage}
              src={fixPosterPath(movie.poster_path, 400)}
              alt={movie.title}
            />
          </Col>
          <Col>
            <Row>
              <h2>{movie.title}</h2>
            </Row>
            <Row>{movie.release_date}</Row>
            <Row>{movie.overview}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieDetails;
