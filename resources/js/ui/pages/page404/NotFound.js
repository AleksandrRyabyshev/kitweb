import React from 'react';
import { Helmet } from "react-helmet";
import { ROUTES } from "../../../config/routes";

class NotFound extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Not Found</title>
          <meta name="description" content="Page 404" />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>

                <div className="error-details">
                  Sorry, an error has occured, Requested page not found!
                </div>

                <div className="error-actions">
                  <a href={ROUTES.SSR.HOME} className="btn btn-primary btn-lg">
                    Take Me Home
                  </a>
                  <a href="#" className="btn btn-default btn-lg">
                    Contact Support
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

export default NotFound;
