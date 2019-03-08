import { combineReducers } from "redux";
import * as types from "./types";
import { createAsyncReducer } from "../../utils/redux.helpers";

const moviesSuccessReducer = (state, action) => {
  //   const existingMovies = state.response ? state.response.results : [];
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [...action.response.results]
    }
  };
};

export default combineReducers({
  popularMovies: createAsyncReducer(types.FETCH_LIST, {
    [`${types.FETCH_LIST}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(types.SEARCH_MOVIE, {
    [`${types.SEARCH_MOVIE}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(types.FETCH_DETAILS)
});
