import { useState } from "react";
import logo from "./Assets/Images/logo.png";
import Video from "./Assets/Videos/LQ_nologo.mp4";
function Header({ setEmail, email }) {
  const onEmailChange = (e) => setEmail(e.target.value);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [email];
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    setSent(true);
    fetch("/contact", header)
      .then((response) => response.json())
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="header">
      <video src={Video} alt="video" autoPlay muted loop style={styles.video} />
      <div style={styles.container}>
        <div style={styles.headerText}>
          <h1 style={styles.h1}>
            We only get one planet, Let's treat her with respect.
          </h1>
          <p style={styles.p}>
            Dry John Toilet Bags provide a perfect resource for disposing of
            your waste in an eco-friendly manner.
          </p>
          {sent ? (
            "Thank you for signing up!"
          ) : (
            <form style={styles.form}>
              <input
                style={styles.input}
                placeholder="Email Address"
                onChange={onEmailChange}
              />
              <button onSubmit={handleSubmit} type="submit" className="button">
                Mailing List
              </button>
            </form>
          )}
        </div>

        <img src={logo} alt="Dry John Logo" style={styles.logo} />
      </div>
    </div>
  );
}

export default Header;
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(700px, 1fr)",
    alignItems: "center",
    justifyItems: "center",

    margin: "auto",
    minHeight: "80vh",
    background: "#00000055",
  },
  logo: {
    zIndex: 1,
    maxWidth: "700px",
    position: "relative",
  },
  headerText: {
    maxWidth: "600px",
  },
  h1: {
    fontSize: "41.89px",
    color: "#7fce5c",
  },
  p: {
    color: "#fff",
  },
  form: {
    display: "flex",
  },
  input: {
    height: "25px",
    border: ".5px black solid",
    borderRadius: "5px 0 0 5px",
  },
  video: {
    height: "80vh",
    zIndex: -1,
    position: "absolute",
    opacity: .6,
  },
};
