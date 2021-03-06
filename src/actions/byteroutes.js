import { api } from '../utils/constants';

export const FETCH_ROUTES = 'FETCH_ROUTES';
export const FETCH_ROUTES_SUCCESS = 'FETCH_ROUTES_SUCCESS';
export const FETCH_ROUTES_FAILURE = 'FETCH_ROUTES_FAILURE';

export const CHANGE_DATE = 'CHANGE_DATE';

export function fetchRoutes(date) {
  return (dispatch) => {
    //console.log("FETCHIN ROUTES");
    dispatch({type: FETCH_ROUTES});
    fetch(`${api}&date=${date}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          //console.log("FETCHED ROUTES");
          dispatch({
            type: FETCH_ROUTES_SUCCESS,
            payload: {
              routes: responseJson.routes
            }
          });
        } else {
          //console.log("FETCHED ROUTES FAIL");
          dispatch({
            type: FETCH_ROUTES_FAILURE,
            payload: {
              error: responseJson.message
            }
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ROUTES_FAILURE
        });
      });
  }
}

export function changeDate(selectedDate) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_DATE,
      payload: {
        date: selectedDate,
      }
    });
  }
};
