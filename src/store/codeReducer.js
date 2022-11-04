import {setCode} from '../api/code';

const initialState = {
  code: '',
};

const UPDATE_CODE = 'UPDATE_CODE';
const DELETE_CODE = 'DELETE_CODE';

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code,
});

export const deleteCode = () => ({
  type: DELETE_CODE,
  code: '',
});

export const codeMiddleware = (store) => (next) => (action) => {
  if (!action) return;
  if (action.type === UPDATE_CODE) {
    setCode(action.code);
  }

  if (action.type === DELETE_CODE) {
    setCode('');
  }

  next(action);
};

export const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      setCode(action.code);
      return {
        ...state,
        code: action.code,
      };

    case DELETE_CODE:
      setCode('');
      return {
        ...state,
        code: '',
      };

    default:
      return state;
  }
};
