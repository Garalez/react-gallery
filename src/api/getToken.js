import {
  URL_TOKEN,
  ACCESS_KEY,
  REDIRECT_URI,
  SCOPE,
  SECRET_KEY,
  GRANT_TYPE,
} from './const';

const urlGetToken = new URLSearchParams('');

urlGetToken.append('client_id', ACCESS_KEY);
urlGetToken.append('client_secret', SECRET_KEY);
urlGetToken.append('redirect_uri', REDIRECT_URI);
urlGetToken.append('scope', SCOPE);
urlGetToken.append('grant_type', GRANT_TYPE);

export const urlToken = `${URL_TOKEN}${urlGetToken.toString()}`;
