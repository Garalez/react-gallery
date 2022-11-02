import {URL_API, ACCESS_KEY} from '../../api/const';
import axios from 'axios';

export const IMAGES_REQUEST = 'IMAGES_REQUEST';
export const IMAGES_REQUEST_SUCCESS = 'IMAGES_REQUEST_SUCCESS';
export const IMAGES_REQUEST_ERROR = 'IMAGES_REQUEST_ERROR';

export const imagesRequest = () => ({
  type: IMAGES_REQUEST,
});

export const imagesRequestSuccess = (data) => ({
  type: IMAGES_REQUEST_SUCCESS,
  images: data,
});

export const imagesRequestError = (error) => ({
  type: IMAGES_REQUEST_ERROR,
  error,
});

export const imagesRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  console.log('token: ', token);

  if (!token) return;
  dispatch(imagesRequest());
  console.log(URL_API);

  axios(`${URL_API}photos?per_page=30`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  })
    .then(({data}) => {
      console.log('data: ', data);
      dispatch(imagesRequestSuccess(data));
    })
    .catch((err) => {
      dispatch(imagesRequestError(err.message));
    });
};
