import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';

const Body = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className='App'>
        <section className='App__content'>{children}</section>
      </main>
      <Footer />
    </>
  );
};

Body.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(Body);
