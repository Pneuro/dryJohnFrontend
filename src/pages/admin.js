import React from "react";
import PropTypes from "prop-types";

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
      </div>
    </>
  );
};

backendPage.propTypes = {
  user: PropTypes.string,
};

export default backendPage;
