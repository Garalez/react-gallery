/* eslint-disable max-len */
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

export const imagesRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  const images = getState().images.images;
  const status = getState().images.status;
  let page = getState().images.page;
  let userAuth;

  if (isNaN(+page)) {
    page = 0;
  }

  if (status === 'loading' || status === 'error') return;

  token !== '' ?
  (userAuth = `Bearer ${token}`) :
  (userAuth = `Client-ID ${ACCESS_KEY}`);

  dispatch(imagesRequest());

  axios(`${URL_API}/photos${id ? `/${id}` : `?per_page=30&page=${+page + 1}`}`, {
    headers: {
      Authorization: userAuth,
    },
  })
    .then((data) => {
      const getPage = data.config.url;
      const newPage = getPage.replace(/^\S+=/g, '');
      if (!id) {
        if (Array.isArray(images)) {
          dispatch(
            imagesRequestSuccess({images: [...images, ...data.data], page: newPage})
          );
        } else {
          dispatch(imagesRequestSuccess({images: data.data, page: newPage}));
        }
      } else {
        dispatch(imagesRequestSuccess({images: data.data, page: newPage}));
      }
    })
    .catch((err) => {
      dispatch(imagesRequestError(err.message));
    });
};
