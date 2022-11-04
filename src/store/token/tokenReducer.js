import {
  REQUEST_TOKEN,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_ERROR,
  UPDATE_TOKEN,
} from './tokenAction';

const initialState = {
  token: '',
  error: '',
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return {
        ...state,
        error: '',
      };
    case REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: '',
      };
    case REQUEST_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
        error: '',
      };

    default:
      return state;
  }
};
