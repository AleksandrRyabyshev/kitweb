import React from 'react';
import { ROUTES } from '../../../config/routes';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

    {/* <!-- Brand/logo --> /*/}
      <a className="navbar-brand" href={ROUTES.SSR.HOME}>
        <img src="/public/images/logo/logo.svg" alt="Logo" />
      </a>

      {/* <!-- Links --> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={ROUTES.SSR.REGISTRATION}>Sing Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={ROUTES.SSR.LOGIN}>Sing In</a>
          </li>
        </ul>
      </div>

    </nav>
  </header>

);

export default Header;
