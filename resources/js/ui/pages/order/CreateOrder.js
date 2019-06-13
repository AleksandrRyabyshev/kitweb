import React from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { ROUTES } from "../../../config/routes";

class CreateOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      order: {
        order_name: '',
        locality: '',
        box_numb: '',
        numb_seal: '',
        type_service: '',
        payment_type: '',
        price: '',
      },
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e, order){
    e.preventDefault();

    console.log('Order', order);

    axios.post('/api/order', order).then(response => {
      console.log(response);
    }).catch(errors => {
      console.log(errors);
    });

    window.location.href = ROUTES.SSR.THANKS_ORDER;
  };

  handleFormChange(e, field) {
    const value = e.target.value;
    this.setState(prevState => ({
      order: {
        ...prevState.order,
        [field]: value,
      },
    }));
  }

  render () {
    const { order } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>New Order</title>
          <meta name="description" content="" />
        </Helmet>

        <div className="container">
          <h3 className="registration text-center">Новый Заказ</h3>

          {/* <!-- Create new Order Form Form --> */}
          <form onSubmit={(e) => this.onSubmitForm(e, order)}>

            {/* <!-- Left Column--> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-sm-12">

                {/* <!-- Order name --> */}
                <div className="form-group">
                  <label htmlFor="order_name">Название заказа*</label>
                  <input
                    type="text" id="order_name"
                    placeholder="Order Name" className="form-control"
                    value={order.order_name}
                    onChange={e => this.handleFormChange(e, 'order_name')}
                    required
                  />
                </div>

                {/* <!-- Box Number --> */}
                <div className="form-group">
                  <label htmlFor="box_numb">Номер ящика* </label>
                  <input
                    type="number" id="box_numb"
                    placeholder="Box number" className="form-control"
                    value={order.box_numb}
                    onChange={e => this.handleFormChange(e, 'box_numb')}
                    min="1" required
                  />
                </div>

                {/* <!-- Seal Number --> */}
                <div className="form-group">
                  <label htmlFor="numb_seal">Номер пломбы* </label>
                  <input
                    type="number" id="numb_seal"
                    placeholder="Seal number" className="form-control"
                    value={order.numb_seal}
                    onChange={e => this.handleFormChange(e, 'numb_seal')}
                    min="1" required
                  />
                </div>

                {/* <!-- Type_service --> */}
                <div className="form-group">
                  <label htmlFor="type_service">Выбрать тип услыги*</label>
                  <input
                    type="text" id="type_service"
                    placeholder="Type_service" className="form-control"
                    value={order.type_service}
                    onChange={e => this.handleFormChange(e, 'type_service')}
                    required
                  />
                </div>
              </div>
              {/* <!-- .// Left Column--> */}

              {/* <!-- Right Column--> */}
              <div className="col-xl-6 col-lg-6 col-sm-12">

                {/* <!-- Payment Type --> */}
                <div className="form-group">
                  <label htmlFor="payment_type">Выбрать способ оплаты*</label>
                  <select
                    id="payment_type"
                    className="form-control"
                    value={order.payment_type}
                    onChange={e => this.handleFormChange(e, 'payment_type')}
                    required
                  >
                    <option defaultValue value="">Choose...</option>
                    <option value="Наличные">Наличные</option>
                    <option value="Банковская карта">Банковская карта</option>
                  </select>
                </div>

                {/* <!-- Price --> */}
                <div className="form-group">
                  <label htmlFor="price">Цена* </label>
                  <input
                    type="number" id="price"
                    placeholder="Price" className="form-control"
                    value={order.price}
                    onChange={e => this.handleFormChange(e, 'price')}
                    min="1" required
                  />
                </div>

                {/* <!-- Locality --> */}
                <div className="form-group">
                  <label htmlFor="locality">Выбрать приемный пункт*</label>
                  <input
                    type="text" id="locality"
                    placeholder="Locality" className="form-control"
                    value={order.locality}
                    onChange={e => this.handleFormChange(e, 'locality')}
                    required
                  />
                </div>
              </div>
            </div>
            {/* <!-- ../ Right Column--> */}

            {/* <!-- Button--> */}
            <button type="submit" className="btn btn-primary float-right">Создать заказ</button>
          </form>
          {/* <!-- ../Create new Order Form --> */}
        </div>

      </React.Fragment>
    );
  }
}

export default CreateOrder;
