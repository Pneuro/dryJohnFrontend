import React from "react";
import PropTypes from "prop-types";
import BlogForm from "../components/BlogForm";
import AllPosts from "../components/AllPosts";
import Footer from "../components/Footer";
const BackendPage = ({ user, logout }) => {
  const styles = {
    wrapper: {
      marginTop: "100px",
    },
  };
  return (
    <div style={styles.wrapper}>
      <h1>Welcome, {user}</h1>
      <button onClick={() => logout()}>Logout</button>
      <BlogForm />
      <AllPosts showControls={true} />
      <Footer />
    </div>
  );
};

BackendPage.propTypes = {
  user: PropTypes.string,
};

export default BackendPage;
