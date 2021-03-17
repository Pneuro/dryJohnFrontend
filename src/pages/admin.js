import React from "react";
import PropTypes from "prop-types";

import AllPosts from "../components/AllPosts";
import { useState } from "react";
import Footer from "../components/Footer";

const backendPage = ({ user, logout }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailUpdate = (e) => setEmail(e.target.value);
  const passwordUpdate = (e) => setPassword(e.target.value);

  const data = [email, password];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("https://dry-john-backend.herokuapp.com/login", headers).then((res) =>
      res
        .json()
        .then((res) => {
          console.log(res.data);
          if (res === 200) {
            console.log(res);
            setLogin(true);
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.error(err))
    );
  };
  const headers = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

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
