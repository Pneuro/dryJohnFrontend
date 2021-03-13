import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

import Modal from "./Modal";

function Header({ setEmail, email }) {
  const [modal, setModal] = useState(false);
  const [vid, setVid] = useState(false);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
      setVid("100vh");
    } else {
      setMobile(false);
      setVid("100vw");
    }
  }, [mobile]);

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
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
      alignItems: "center",
      justifyItems: "center",
      margin: "auto",
      minHeight: "80vh",
    },
    logo: {
      zIndex: 1,
      width: "calc(50vw - 10%)",
      position: "relative",
      minWidth: "300px",
      justifySelf: "center",
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
    <main className="header">
      <div style={styles.container}>
        <video
          src="Assets/Videos/LQ_nologo.mp4"
          alt="video"
          autoPlay
          playsInline
          controls={false}
          muted
          loop
          style={styles.video}
        />
        <div style={styles.headerText}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0 }}
            style={styles.h1}
          >
            We only get one planet, Let's treat her with respect.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={styles.p}
          >
            Dry John Toilet Bags provide a perfect resource for disposing of
            your waste in an eco-friendly manner.
          </motion.p>
          {!modal ? (
            <form style={styles.form} onSubmit={openModal}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ y: [40, 0], opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: 0.6 }}
                type="submit"
                className="button"
              >
                Contact Us
              </motion.button>
            </form>
          ) : (
            <Modal setEmail={setEmail} setModal={setModal} />
          )}
          <form style={styles.form}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.3, delay: 0.9 }}
              type="submit"
              className="button"
            >
              <Link
                style={styles.link}
                href="https://www.amazon.com/Portable-Toilet-Bags-Compostable-Absorbent/dp/B078X3TCRG/ref=sr_1_2?crid=2RZVRI2TQJG7P&dchild=1&keywords=dry+john+toilet+bags&qid=1613490708&sprefix=dry+john%2Caps%2C174&sr=8-2"
              >
                Order Now
              </Link>
            </motion.button>
          </form>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          src="/Assets/Images/header_logo.png"
          animate={{ y: [100, 0], opacity: [0, 1], rotate: [1800, 0] }}
          transition={{ duration: 0.3, delay: 1.2 }}
          style={styles.logo}
        />
      </div>
    </main>
  );
}

export default Header;

// if screen is less than 1758 px can I change the CSS section
Header.defaultProps = {};
