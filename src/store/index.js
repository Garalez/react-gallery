import {configureStore} from '@reduxjs/toolkit';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {imagesReducer} from './images/imagesReducer';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    images: imagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
