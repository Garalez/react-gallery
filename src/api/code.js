export const setCode = (code) => {
  localStorage.setItem('code', code);
};

export const getCode = () => {
  let code = '';
  if (location.pathname.includes('/auth')) {
    code = new URLSearchParams(location.search.substring(1)).get('code');
    setCode(code);
  } else {
    code = localStorage.getItem('code');
  }

  return code;
};
