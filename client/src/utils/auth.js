// Token key in local storage
const TOKEN_KEY = 'event_management_token';
const USER_KEY = 'event_management_user';

// Save token and user to local storage
export const setAuth = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

// Get token from local storage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Get user from local storage
export const getUser = () => {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};

// Remove token and user from local storage
export const removeAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!getToken();
};