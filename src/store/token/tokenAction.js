import {urlToken} from '../../api/getToken';
import axios from 'axios';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_ERROR = 'REQUEST_TOKEN_ERROR';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const requestToken = () => ({
  type: REQUEST_TOKEN,
});

export const requestTokenSuccess = (token) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

export const requestTokenError = (error) => ({
  type: REQUEST_TOKEN_ERROR,
  error,
});

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const requestTokenAsync = () => (dispatch, getState) => {
  const code = getState().code.code;
  const token = getState().token.token;

  if (!code || code === 'null' || token) return;
  dispatch(requestToken());

  axios
    .post(`${urlToken}&code=${code}`)
    .then(({data}) => {
      dispatch(requestTokenSuccess(data.access_token));
      localStorage.setItem('bearer', data.access_token);
    })
    .catch((err) => {
      console.error(err);
      dispatch(requestTokenError(err.message));
    });
};
