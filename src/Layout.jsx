import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { Header, Footer } from "./components";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="App">
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(Layout);
