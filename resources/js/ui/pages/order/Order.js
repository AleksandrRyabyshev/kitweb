import React from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      order: [],
    }
  }

  componentDidMount() {
    const { match } = this.props;

    axios.get(`/api/order/${match.params.id}`).then(response => {
      this.setState({
        order: response.data
      });
    }).catch(errors => {
      console.log(errors);
    })
  }

  render () {
    const { order } = this.state;

    return (
      <React.Fragment>
        {order.map((item, index) => (
          <div  key={index}>
            <Helmet>
              <title>{item.order_name}</title>
              <meta name="description" content={item.order_name} />
            </Helmet>

            <div className="container">
              <h3 className="text-center">Order № {item.id_order} </h3>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr className="thead-dark">
                      <th scope="col" className="text-center">Order name</th>
                      <th scope="col" className="text-center">Price</th>
                      <th scope="col" className="text-center">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="order">
                      <td className="text-center">
                        <b>{item.order_name}</b>
                      </td>
                      <td className="text-center">
                        <b>{item.price}</b>
                      </td>
                      <td className="text-center">
                        <b>{item.status}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Order;
