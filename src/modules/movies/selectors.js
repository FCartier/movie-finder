const chooseMovieList = ({ movieSearch, popularMovies }) => {
  if (movieSearch.response !== null && movieSearch.resquest !== "") {
    return movieSearch;
  }
  return popularMovies;
};

export default chooseMovieList;
