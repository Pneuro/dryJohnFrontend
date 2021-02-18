import React from "react";
import PropTypes from "prop-types";

const BackendPage = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user}</h1>
    </div>
  );
};

BackendPage.propTypes = {
    user: PropTypes.string,
};

export default BackendPage;
