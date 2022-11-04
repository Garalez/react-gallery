import {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from './userDataAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
