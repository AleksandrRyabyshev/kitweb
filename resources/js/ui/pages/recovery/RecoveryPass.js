import React from 'react';
import {Helmet} from "react-helmet";

class RecoveryPass extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Recovery Password</title>
          <meta name="description" content="description recovery page" />
        </Helmet>

        <div className="container">
          <h1>Recovery Password page</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default RecoveryPass;
