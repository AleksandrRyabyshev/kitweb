import React from 'react';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = ({ children, ...props }) => (
  <div id="main">
    <div id="content-wrapper">
      <Header {...props} />
      <section>
        {children}
      </section>
    </div>

    <Footer />
  </div>
);

Main.propTypes = {
  children: oneOfType([arrayOf(element), object]).isRequired,
};

export default Main;
