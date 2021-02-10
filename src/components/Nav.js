import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/Images/logo.png";
function Nav() {
  return (
    <div style={styles.container}>
      <div>
        <img src={Logo} alt="dry john logo" style={styles.logo} />
      </div>
      <ul style={styles.list}>
        <Link to="/" exact style={styles.item}>
          Home
        </Link>
        <Link to="/about" style={styles.item}>
          About
        </Link>
        <Link to="/products" style={styles.item}>
          Products
        </Link>
        <Link to="/contact" style={styles.item}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#3485BC",
    background: "#fff",
    minHeight: "100px",
    position: "relative",
    zIndex: 2,
  },
  list: {
    display: "flex",
    justifyContent: "space-around",
    minWidth: "250px",
  },
  item: {
    color: "#3485bc",
    textDecoration: "none",
    listStyle: "none",
    padding: "1em",
  },
  logo: {
    maxHeight: "90px",
  },
};
