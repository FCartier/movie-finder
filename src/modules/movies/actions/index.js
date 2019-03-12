import * as types from "../common/types";
import * as movieService from "../../../utils/apiService";
import { createAsyncActionCreator } from "../../../utils/redux.helpers";

export const fetchMovies = page =>
  createAsyncActionCreator(types.FETCH_LIST, movieService.getPopularMovies, {
    page
  });

export const searchMovies = (query, page) =>
  createAsyncActionCreator(types.SEARCH_MOVIE, movieService.searchMovies, {
    query,
    page
  });

export const getMovieDetails = movieId =>
  createAsyncActionCreator(types.FETCH_DETAILS, movieService.getMovieDetails, {
    movieId
  });
