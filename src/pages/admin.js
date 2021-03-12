import React from "react";
import PropTypes from "prop-types";
import BlogForm from "../components/BlogForm";
import AllPosts from "../components/AllPosts";
import { useState } from "react";
import Footer from "../components/Footer";
import Login from "../components/login";
const backendPage = ({ user, logout }) => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailUpdate = (e) => setEmail(e.target.value);
  const passwordUpdate = (e) => setPassword(e.target.value);

  const data = [email, password];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    fetch("https://dry-john-backend.herokuapp.com/login", headers).then((res) =>
      res
        .json()
        .then((res) => {
          console.log(res.data);
          if (res.data === "pete@dryjohn.com") {
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
      {login ? (
        <div style={styles.wrapper}>
          <h1>Welcome, {user}</h1>
          <button onClick={() => logout()}>Logout</button>
          <BlogForm />
          <AllPosts showControls={true} />
          <Footer />
        </div>
      ) : (
        <>
          <Login
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            emailUpdate={emailUpdate}
            passwordUpdate={passwordUpdate}
          />
        </>
      )}
    </>
  );
};

backendPage.propTypes = {
  user: PropTypes.string,
};

export default backendPage;
