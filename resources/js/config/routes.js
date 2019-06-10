export const ROUTES = {
  AUTHENTICATED: {
    HOME: '/me',
  },
  SSR: {
    HOME: '/',
    RECOVERY: '/recovery',
    LOGIN: '/login',
    ORDER: '/order/id/:id'
  },
  ADMIN: {
    HOME: '/panel/admin',
  },
};

export default { ROUTES };
