import React from 'react';
import {Helmet} from "react-helmet";

class Order extends React.Component {

  render () {
    const { match } = this.props;
    console.log('id', match.params.id);

    return (
      <React.Fragment>
        <Helmet>
          <title>Order {match.params.id}</title>
          <meta name="description" content="order" />
        </Helmet>

        <div className="container">
          <h1>Order table {match.params.id}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Order;
