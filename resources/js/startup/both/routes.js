import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import Home from '../../ui/pages/home/Home';
import RecoveryPass from '../../ui/pages/recovery/RecoveryPass';
import SingIn from '../../ui/pages/auth/SingIn';
import NotFound from '../../ui/pages/page404/NotFound';
import Order from '../../ui/pages/order/Order';
import SingUp from '../../ui/pages/auth/SingUp';
import CreateOrder from '../../ui/pages/order/CreateOrder';
import ThanksOrder from '../../ui/pages/thanks/ThanksOrder';
import ThanksRegistration from '../../ui/pages/thanks/ThanksRegistration';

const Routes = () => (
  <React.Fragment>
    <Switch>
      {/*<Route exact path="/" render={() => <Redirect to={ROUTES.SSR.HOME} />} />*/}
      <Route exact path={ROUTES.SSR.HOME} render={() => <Home />} />
      <Route exact path={ROUTES.SSR.RECOVERY} render={() => <RecoveryPass />} />
      <Route exact path={ROUTES.SSR.LOGIN} render={() => <SingIn />} />
      <Route exact path={ROUTES.SSR.REGISTRATION} render={() => <SingUp />} />
      <Route exact path={ROUTES.SSR.NEW_ORDER} render={() => <CreateOrder />} />
      <Route
        exact
        path={ROUTES.SSR.ORDER}
        render={props => <Order {...props} />}
      />
      <Route exact path={ROUTES.SSR.THANKS_ORDER} render={() => <ThanksOrder />} />
      <Route exact path={ROUTES.SSR.THANKS_REGISTRATION} render={() => <ThanksRegistration />} />

      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default Routes;
