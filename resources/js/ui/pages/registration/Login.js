import React from 'react';
import { Helmet } from 'react-helmet';
import { ROUTES } from '../../../config/routes';

class Login extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="description" />
        </Helmet>

        <div className="login">
          <h2 className="text-center">Вход</h2>
          <form>
            <div className="form-group">
              <label htmlFor="login">Логин</label>
              <input
                type="text"
                className="form-control"
                id="login"
                aria-describedby="loginHelp"
                placeholder="Enter login"
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div>
              <a href={ROUTES.SSR.RECOVERY}>Забыли пароль?</a>
            </div>
            <button type="submit" className="btn btn-primary float-right">Войти</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
