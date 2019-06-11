import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Menu from '../../componets/home/Menu';
import Orders from '../../componets/home/Orders';
// import { ROUTES } from '../../../config/routes';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount() {
    axios.get('/api/orders').then(response => {
      this.setState({
        orders: response.data
      });
    }).catch(errors => {
        console.log(errors);
    })
  }

  render () {
    const { orders } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="description home page" />
        </Helmet>

        <div>
          {/* <!-- The menu is not ready yet --> */}
          <Menu />

          <div className="container">
            <h3 className="text-center">Заказы</h3>

            {/* <!-- View Orders--> */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr className="thead-dark">
                    <th scope="col" className="text-center">Order name</th>
                    <th scope="col" className="text-center">Number seal</th>
                    <th scope="col" className="text-center">Box number</th>
                    <th scope="col" className="text-center">Locality</th>
                    <th scope="col" className="text-center">Date receipt</th>
                    <th scope="col" className="text-center">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((item, index) => (
                    <Orders key={index} order={item}/>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <!-- //. View Orders--> */}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
