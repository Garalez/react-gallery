export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.search.substring(1)).get('code');
    setToken(token);
  } else {
    token = localStorage.getItem('bearer');
  }

  return token;
};
