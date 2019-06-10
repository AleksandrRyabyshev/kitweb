import React from 'react';
import { Helmet } from 'react-helmet';
import { ROUTES } from '../../../config/routes';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="description home page" />
        </Helmet>

        <div className="container">
          <h1>Home page</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
