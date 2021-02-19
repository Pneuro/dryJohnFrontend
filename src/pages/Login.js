import { useState } from "react";

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailUpdate = (e) => setEmail(e.target.value);
  const passwordUpdate = (e) => setPassword(e.target.value);
  const data = [email, password];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", headers).then((res) =>
      res
        .json()
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        .then(setLoggedIn(true))
    );
  };
  const headers = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

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
