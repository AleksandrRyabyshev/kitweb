import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import Home from '../../ui/pages/home/Home';
import RecoveryPass from '../../ui/pages/recovery/RecoveryPass';
import SingIn from '../../ui/pages/auth/SingIn';
import NotFound from '../../ui/pages/page404/NotFound';
import Order from '../../ui/pages/order/Order';
import SingUp from '../../ui/pages/auth/SingUp';

const Routes = () => (
  <React.Fragment>
    <Switch>
      {/*<Route exact path="/" render={() => <Redirect to={ROUTES.SSR.HOME} />} />*/}
      <Route exact path={ROUTES.SSR.HOME} render={() => <Home />} />
      <Route exact path={ROUTES.SSR.RECOVERY} render={() => <RecoveryPass />} />
      <Route exact path={ROUTES.SSR.LOGIN} render={() => <SingIn />} />
      <Route exact path={ROUTES.SSR.REGISTRATION} render={() => <SingUp />} />
      <Route
        exact
        path={ROUTES.SSR.ORDER}
        render={props => <Order {...props} />}
      />

      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default Routes;
