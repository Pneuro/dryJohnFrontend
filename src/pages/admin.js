import React from "react";
import PropTypes from "prop-types";

import AllPosts from "../components/AllPosts";
import { useState } from "react";
import Footer from "../components/Footer";

const backendPage = ({ user, logout }) => {
  const styles = {
    wrapper: {
      marginTop: "100px",
    },
  };
  return (
    <>
      <div style={styles.wrapper}>
        <h1>Welcome, {user}</h1>
        <button onClick={() => logout()}>Logout</button>

        <AllPosts />
        <Footer />
      </div>
    </>
  );
};

backendPage.propTypes = {
  user: PropTypes.string,
};

export default backendPage;
