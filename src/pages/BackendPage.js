import React from "react";
import PropTypes from "prop-types";

const BackendPage = ({ user, logout }) => {
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

BackendPage.propTypes = {
  user: PropTypes.string,
};

export default BackendPage;
