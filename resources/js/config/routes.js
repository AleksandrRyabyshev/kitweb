export const ROUTES = {
  AUTHENTICATED: {
    HOME: '/me',
  },
  SSR: {
    HOME: '/',
    RECOVERY: '/recovery',
    LOGIN: '/singin',
    ORDER: '/order/id/:id',
    REGISTRATION: '/singup',
  },
  ADMIN: {
    HOME: '/panel/admin',
  },
};

export default { ROUTES };
