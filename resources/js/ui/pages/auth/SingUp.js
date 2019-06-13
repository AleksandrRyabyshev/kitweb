import React from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { ROUTES } from "../../../config/routes";

class SingUp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        first_name: '',
        last_name: '',
        city: '',
        address: '',
        house: '',
        phone: '',
        birth_date: '',
        email: '',
        user_name: '',
        password: '',
      },
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e, data){
    e.preventDefault();

    axios.post('api/user', data).then(response => {
      console.log(response);
    }).catch(errors => {
      console.log(errors);
    });

    window.location.href = ROUTES.SSR.THANKS_REGISTRATION;
  };

  handleFormChange(e, field) {
    const value = e.target.value;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [field]: value,
      },
    }));
  }

  render () {
    const { data } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <title>Registration</title>
          <meta name="description" content="description" />
        </Helmet>

        <div className="container">
          <h3 className="registration text-center">Регистрация</h3>

          {/* <!-- Registration Form --> */}
          <form onSubmit={(e) => this.onSubmitForm(e, data)}>

            {/* <!-- Left Column--> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-sm-12">

                {/* <!-- First name --> */}
                <div className="form-group">
                  <label htmlFor="first_name">First Name*</label>
                  <input
                    type="text" id="first_name"
                    placeholder="First Name" className="form-control"
                    value={data.first_name}
                    onChange={e => this.handleFormChange(e, 'first_name')}
                    required
                  />
                </div>

                {/* <!-- Last name --> */}
                <div className="form-group">
                  <label htmlFor="last_name">Last Name*</label>
                  <input
                    type="text" id="last_name"
                    placeholder="Last Name"
                    className="form-control"
                    value={data.last_name}
                    onChange={e => this.handleFormChange(e, 'last_name')}
                    required
                  />
                </div>

                {/* <!-- Login --> */}
                <div className="form-group">
                  <label htmlFor="user_name">Login*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    aria-describedby="loginHelp"
                    placeholder="Enter login"
                    value={data.user_name}
                    onChange={e => this.handleFormChange(e, 'user_name')}
                    required
                  />
                </div>

                {/* <!-- Email --> */}
                <div className="form-group">
                  <label htmlFor="email">Email* </label>
                  <input
                    type="email" id="email"
                    placeholder="Email" className="form-control"
                    name="email"
                    value={data.email}
                    onChange={e => this.handleFormChange(e, 'email')}
                    required
                  />
                </div>

                {/* <!-- Phone number --> */}
                <div className="form-group">
                  <label htmlFor="phone">Phone number* </label>
                    <input
                      type="phoneNumber" id="phone"
                      placeholder="+38 0500 00 00 00" className="form-control"
                      value={data.phone}
                      onChange={e => this.handleFormChange(e, 'phone')}
                      required
                    />
                    <span
                      className="help-block">Your phone number won't be disclosed anywhere
                    </span>
                </div>
              </div>
              {/* <!-- .// Left Column--> */}

              {/* <!-- Right Column--> */}
              <div className="col-xl-6 col-lg-6 col-sm-12">
                {/* <!-- Passwort --> */}
                <div className="form-group">
                  <label htmlFor="password">Passwort*</label>
                  <input
                    type="password" className="form-control"
                    id="password" placeholder="Password"
                    value={data.password}
                    onChange={e => this.handleFormChange(e, 'password')}
                    required
                  />
                </div>

                {/* <!-- Birth date --> */}
                <div className="form-group">
                  <label htmlFor="birth_date">Date of Birth*</label>
                  <input
                    type="date" id="birth_date"
                    className="form-control"
                    value={data.birth_date}
                    onChange={e => this.handleFormChange(e, 'birth_date')}
                    required
                  />
                </div>

                {/* <!-- City --> */}
                <div className="form-group">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text" id="city"
                    placeholder="City" className="form-control"
                    value={data.city}
                    onChange={e => this.handleFormChange(e, 'city')}
                    required
                  />
                </div>

                {/* <!-- Address --> */}
                <div className="form-group">
                  <label htmlFor="address">Adress*</label>
                  <input
                    type="text" id="address"
                    placeholder="Address" className="form-control"
                    value={data.address}
                    onChange={e => this.handleFormChange(e, 'address')}
                    required
                  />
                </div>

                {/* <!-- House --> */}
                <div className="form-group">
                  <label htmlFor="house">House* </label>
                  <input
                    type="number" id="house"
                    placeholder="House number" className="form-control"
                    value={data.house}
                    onChange={e => this.handleFormChange(e, 'house')}
                    min="1" required
                  />
                </div>
              </div>
            </div>
            {/* <!-- ../ Right Column--> */}

            {/* <!-- Button--> */}
            <button type="submit" className="btn btn-primary float-right">Регистрация</button>
          </form>
          {/* <!-- ../Registration Form --> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SingUp;


