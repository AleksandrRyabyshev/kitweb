import React from "react";
import { Link } from 'react-router-dom';

class Order extends React.Component {
  render () {
    const { order } = this.props;
    return (
      <React.Fragment>
        <tr className="order">
          <td className="text-center">
            <Link
              to={`/order/id/${order.id_order}`}
            >
              <b>{order.order_name}</b>
            </Link>
          </td>
          <td className="text-center">
            <b>{order.numb_seal}</b>
          </td>
          <td className="text-center">
            <b>{order.box_numb}</b>
          </td>
          <td className="text-center">
            <b>{order.locality}</b>
          </td>
          <td className="text-center">
            <b>{order.date_receipt}</b>
          </td>
          <td className="text-center">
            <b>{order.status}</b>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Order;
