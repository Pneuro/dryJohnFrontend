import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
function Nav() {
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        <Link style={styles.item}>Login</Link>
        <Link style={styles.item}>Register</Link>
      </ul>
      <div>
        <img src={Logo} alt="dry john logo" style={styles.logo} />
      </div>
      <ul style={styles.list}>
        <Link style={styles.item}>Home</Link>
        <Link style={styles.item}>Store</Link>
        <Link style={styles.item}>Contact</Link>
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
  },
  logo: {
    maxHeight: "100px",
  },
};
