import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import * as types from "../common/types";
import { createAsyncReducer } from "../../../utils/redux.helpers";

const moviesSuccessReducer = (state, action) => {
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [...action.response.results]
    }
  };
};

const detailsSuccessReducer = (state, action) => {
  return {
    ...state,
    ...action.response,
    isLoading: false
  };
};
export default combineReducers({
  popularMovies: createAsyncReducer(types.FETCH_LIST, {
    [`${types.FETCH_LIST}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(types.SEARCH_MOVIE, {
    [`${types.SEARCH_MOVIE}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(types.FETCH_DETAILS, {
    [`${types.FETCH_DETAILS}_SUCCESS`]: detailsSuccessReducer
  }),
  routing: routerReducer
});
