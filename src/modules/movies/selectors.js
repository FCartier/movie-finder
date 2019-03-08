export function chooseMovieList(state) {
  const { movieSearch, popularMovies } = state;
  console.log(state);
  if (movieSearch.length > 0) return movieSearch;

  return popularMovies;
}

export default {
  chooseMovieList
};
