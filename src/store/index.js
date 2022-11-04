import {configureStore} from '@reduxjs/toolkit';
import {codeMiddleware, codeReducer} from './codeReducer';
import {imagesReducer} from './images/imagesReducer';
import {userReducer} from './userData/userDataReducer';
import {tokenReducer} from './token/tokenReducer';

export const store = configureStore({
  reducer: {
    code: codeReducer,
    images: imagesReducer,
    user: userReducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(codeMiddleware),
});
