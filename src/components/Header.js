import { useState } from "react";
import logo from "./Assets/Images/logo.png";
import Video from "./Assets/Videos/LQ_nologo.mp4";
import Modal from "./Modal";
function Header({ setEmail, email }) {
  const [videoSize, setVideoSize] = useState("");

  const [modal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [email];
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/contact", header)
      .then((response) => response.json())
      .catch((err) => console.error(err.message));
  };

  const sizeChange = () => {
    if (window.innerWidth < 1758) {
      setVideoSize("30px");
    } else {
      setVideoSize("50px");
    }
  };
  function openModal(e) {
    e.preventDefault();
    if (!modal) {
      console.log(modal);
      setModal(true);
    } else {
      console.log(modal);
      setModal(false);
    }
  }
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(700px, 1fr)",
      alignItems: "center",
      justifyItems: "center",
      margin: "auto",
      minHeight: "100vh",
      background: "#00000055",
      width: "100%",
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
      borderRadius: "1px",
    },
    video: {
      minHeight: "100vh",
      width: "100%",
      zIndex: -1,
      position: "absolute",
      opacity: 1,
      overflow: "hidden",
    },
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
          {modal ? (
            <Modal setEmail={setEmail} setModal={setModal} />
          ) : (
            <form style={styles.form}>
              <button onSubmit={openModal} type="submit" className="button">
                Contact Us
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

// if screen is less than 1758 px can I change the CSS section
