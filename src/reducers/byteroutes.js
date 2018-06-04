import {
  FETCH_ROUTES,
  FETCH_ROUTES_SUCCESS,
  FETCH_ROUTES_FAILURE,
  SELECT_DRIVER,
  SELECT_DATE,
} from '../actions/byteroutes';

const INITIAL_STATE = {
  driver: '',
  date: '2018-06-01',
  routes: [],
  fetchingRoutes: false,
  fetchedRoutes: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case FETCH_ROUTES:
      return {...state, routes: [], fetchingRoutes: true};
    case FETCH_ROUTES_SUCCESS:
      return {...state, fetchingRoutes: false, fetchedRoutes: true, ...action.payload};
    case FETCH_ROUTES_FAILURE:
      return {...state, fetchingRoutes: false, fetchedRoutes: true, routes: [], error: action.message};
    case SELECT_DATE:
      return {...state, date: action.date};
    case SELECT_DRIVER:
      return {...state, driver: action.driver};
	  default:
		  return state;
	}
};
