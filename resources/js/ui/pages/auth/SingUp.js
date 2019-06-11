import React from 'react';
import { Helmet } from 'react-helmet';
// import { ROUTES } from '../../../config/routes';

class SingUp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="description" />
        </Helmet>

        <div className="container">
          <form className="form-horizontal" role="form">
            <h2>Registration</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="col-sm-3 control-label">First Name</label>
              <div className="col-sm-9">
                <input
                  type="text" id="firstName"
                  placeholder="First Name" className="form-control"
                  autoFocus
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label>
                <div className="col-sm-9">
                  <input
                    type="text" id="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    autoFocus
                  />
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-3 control-label">Email* </label>
                <div className="col-sm-9">
                  <input
                    type="email" id="email"
                    placeholder="Email" className="form-control"
                    name="email"
                  />
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-3 control-label">Password*</label>
              <div className="col-sm-9">
                <input
                  type="password" id="password" p
                  laceholder="Password" className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                <div className="col-sm-9">
                  <input type="date" id="birthDate" className="form-control" />
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
              <div className="col-sm-9">
                <input
                  type="phoneNumber" id="phoneNumber"
                  placeholder="Phone number" className="form-control"
                />
                <span
                  className="help-block">Your phone number won't be disclosed anywhere
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SingUp;


