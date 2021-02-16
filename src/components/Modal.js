import { useEffect } from "react";

function Modal({ setEmail, setModal }) {
  const onNameChange = (e) => console.log(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const headers = {
    header: {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },

      "Content-Type": "application/json",
    },
  };
  // Send POST request to backend to add data to database
  useEffect(() => {
    fetch("/mailinglist", headers).then((res) => console.log(res));
  });
  const styles = {
    wrapper: {
      position: "absolute",
      background: "#222d",
      color: "#fff",
      zIndex: 4,
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    input: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "5px",
      width: "350px",
      marginTop: "10px;",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    close: {
      position: "absolute",
      top: "200px",
      right: "200px",
      margin: "50px",
      cursor: "pointer",
      zIndex: 50,
    },
    line1: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(-45deg) translateY(4px)",
    },
    line2: {
      background: "#fff",
      width: "25px",
      height: "3px",
      margin: "3px",
      transform: "rotate(45deg)translateY(-4px)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div onClick={() => setModal(false)} style={styles.close}>
        <div style={styles.line1}></div>
        <div style={styles.line2}></div>
      </div>
      <div style={styles.container}>
        <h1>Contact</h1>
        <form style={styles.form} method="POST">
          <input
            style={styles.input}
            placeholder="Name"
            type="text"
            onChange={onNameChange}
          />
          <input
            style={styles.input}
            placeholder="Email Address"
            type="email"
            onChange={onEmailChange}
          />
          <input
            style={styles.input}
            placeholder="Message"
            type="textarea"
            onChange={onEmailChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
