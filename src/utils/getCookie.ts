export const getCookie = () => {
  const isCookie = document.cookie.match("rt");
  return isCookie ? isCookie[2] : null;
};
