import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import Home from '../../ui/pages/home/Home';
import RecoveryPass from '../../ui/pages/recovery/RecoveryPass';
import Login from '../../ui/pages/registration/Login';

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" render={() => <Redirect to={ROUTES.SSR.HOME} />} />
    <Route exact path={ROUTES.SSR.HOME} render={() => <Home />} />
    <Route exact path={ROUTES.SSR.RECOVERY} render={() => <RecoveryPass />} />
    <Route exact path={ROUTES.SSR.LOGIN} render={() => <Login />} />

  </React.Fragment>
);

export default Routes;
