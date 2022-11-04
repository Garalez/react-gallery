import {URL_API} from '../../api/const';
import axios from 'axios';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export const userRequest = () => ({
  type: USER_REQUEST,
});

export const userRequestSuccess = (data) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});

export const userRequestError = (error) => ({
  type: USER_REQUEST_ERROR,
  error,
});

export const userRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  const userData = getState().user.data;
  if (!token || Object.keys(userData).length !== 0) return;
  dispatch(userRequest());

  axios.get(`${URL_API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
    .then(({data}) => {
      dispatch(userRequestSuccess(data));
    })
    .catch((err) => {
      console.error(err);
      dispatch(userRequestError(err.message));
    });
};
