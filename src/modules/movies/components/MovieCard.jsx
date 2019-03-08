import React from "react";
import { Link } from "react-router";
import { Card, CardTitle, CardMedia } from "material-ui";

const styles = {
  cardTitle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  cardMedia: {
    maxHeight: 394,
    overflow: "hidden"
  },
  card: {
    cursor: "pointer",
    height: 400,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%"
  }
};

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Link to={`movie/${movie.id}`}>
        <Card style={styles.card}>
          <CardMedia
            style={styles.cardMedia}
            overlay={<CardTitle title={movie.title} />}
          >
            <img
              style={styles.bgImage}
              src={movie.poster_path}
              alt={movie.title}
            />
          </CardMedia>
        </Card>
      </Link>
    );
  }
}

export default MovieCard;
