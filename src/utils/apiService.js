const MOVIE_DB_API_KEY = "97c7b84965abccf21c472417798b9f96";
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

export const getPopularMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl("/movie/popular", {
    page
  });
  const result = fetch(fullUrl);
  console.log(result);
  return result;
};

export const searchMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl("/search/movie", {
    page,
    query
  });
  return fetch(fullUrl);
};

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};
