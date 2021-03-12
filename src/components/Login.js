import { useState } from "react";

function Login({
  setLoggedIn,
  handleSubmit,
  
  emailUpdate,
  passwordUpdate,
}) {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(#aaa, #ddd)",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      borderRadius: "5px",
      border: "none",
      margin: ".3em",
    },
  };
  return (
    <div style={styles.wrapper}>
      <h1>Login</h1>

      <form method="POST" onSubmit={handleSubmit} style={styles.form}>
        <input
          onChange={emailUpdate}
          style={styles.input}
          placeholder="email@server.com"
          type="email"
        />
        <input
          style={styles.input}
          onChange={passwordUpdate}
          placeholder="password"
          type="password"
        />
        <button style={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
