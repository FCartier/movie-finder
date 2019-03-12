const TMDB_IMAGE_BASE_URL = (width = 300) =>
  `https://image.tmdb.org/t/p/w${width}`;

export const fixPosterPath = (posterPath, width = 300) =>
  `${TMDB_IMAGE_BASE_URL(width)}${posterPath}`;

export const updateMoviePictureUrls = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`
});

export const getMoviesList = moviesResponse => {
  return !!moviesResponse
    ? [
        ...moviesResponse.results.map(movieResult =>
          updateMoviePictureUrls(movieResult)
        )
      ]
    : null;
};
