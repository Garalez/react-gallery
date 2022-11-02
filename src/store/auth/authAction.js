import {URL_API, ACCESS_KEY} from '../../api/const';
import axios from 'axios';
import {deleteToken} from '../tokenReducer';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (getState, dispatch) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(authRequest());

  axios(`${URL_API}/me`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })
    .then((data) => {
      console.log(data);
      dispatch(authRequestSuccess(data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(deleteToken());
      dispatch(authRequestError(err.message));
    });
};
