import {
  IMAGES_REQUEST,
  IMAGES_REQUEST_SUCCESS,
  IMAGES_REQUEST_ERROR,
} from './imagesAction';

const initialState = {
  images: [],
  status: '',
  page: 0,
  error: '',
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case IMAGES_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        images: action.images.images,
        page: action.images.page,
        error: '',
      };
    case IMAGES_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
