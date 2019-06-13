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
    NEW_ORDER: '/create-order',
    THANKS_ORDER: '/thanks-order',
    THANKS_REGISTRATION: '/thanks-registration',
  },
  ADMIN: {
    HOME: '/panel/admin',
  },
};

export default { ROUTES };
