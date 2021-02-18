import { useState, useEffect } from "react";
import logo from "./Assets/Images/logo.png";
import Video from "./Assets/Videos/LQ_nologo.mp4";
import Modal from "./Modal";
import { Link } from "react-router-dom";
function Header({ setEmail, email }) {
  const [modal, setModal] = useState(false);
  const [vid, setVid] = useState(false);
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

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [mobile]);

  useEffect(() => {
    {
      mobile ? setVid("100vh") : setVid("100vw");
    }
  });

  function openModal(e) {
    e.preventDefault();
    if (!modal) {
      setModal(true);
    } else {
      console.log(modal);
      setModal(false);
    }
  }
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr)",
      alignItems: "center",
      justifyItems: "center",
      margin: "auto",
      paddingTop: "100px",
    },
    logo: {
      zIndex: 1,
      maxWidth: "calc(40vw)",
      position: "relative",
      minWidth: "300px",
    },
    headerText: {
      maxWidth: "600px",
      background: "#3339",
      padding: "1em",
      borderRadius: "5px",
    },
    h1: {
      fontSize: "41.89px",
      color: "#7fce5c",
      maxWidth: "80vw",
    },
    p: {
      maxWidth: "80vw",
      color: "#fff",
    },
    form: {
      display: "flex",
      marginTop: "5px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
    input: {
      height: "25px",
      border: ".5px black solid",
      borderRadius: "1px",
    },
    video: {
      minWidth: vid,
      backgroundSize: "cover",
      zIndex: -1,
      position: "fixed",
      opacity: 1,
      overflow: "hidden",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="header">
      <div style={styles.container}>
        <video
          src={Video}
          alt="video"
          autoPlay
          muted
          loop
          style={styles.video}
        />
        <div style={styles.headerText}>
          <h1 style={styles.h1}>
            We only get one planet, Let's treat her with respect.
          </h1>
          <p style={styles.p}>
            Dry John Toilet Bags provide a perfect resource for disposing of
            your waste in an eco-friendly manner.
          </p>
          {!modal ? (
            <form style={styles.form} onSubmit={openModal}>
              <button type="submit" className="button">
                Contact Us
              </button>
            </form>
          ) : (
            <Modal setEmail={setEmail} setModal={setModal} />
          )}
          <form style={styles.form}>
            <button type="submit" className="button">
              <Link style={styles.link} to="/order">
                Order Now
              </Link>
            </button>
          </form>
        </div>

        <img src={logo} alt="Dry John Logo" style={styles.logo} />
      </div>
    </div>
  );
}

export default Header;

// if screen is less than 1758 px can I change the CSS section
