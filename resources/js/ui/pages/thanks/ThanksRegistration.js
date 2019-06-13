import React from 'react';
import { Helmet } from "react-helmet";
import { ROUTES } from "../../../config/routes";

class ThanksRegistration extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Thank you for registration</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <div className="error-details">
                  <h1>Thank you for registration</h1>
                </div>

                <div className="error-actions">
                  <a href={ROUTES.SSR.HOME} className="btn btn-primary btn-lg">
                    Take Me Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThanksRegistration;
