import React from "react";
import Logo from "./Images/logo.png";
function Nav() {
  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        <li style={styles.item}>Login</li>
        <li style={styles.item}>Register</li>
      </ul>
      <div>
        <img src={Logo} alt="dry john logo" style={styles.logo} />
      </div>
      <ul style={styles.list}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>Store</li>
        <li style={styles.item}>Contact</li>
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
    background: "#FFF500",
    minHeight: "100px",
  },
  list: {
    display: "flex",
    justifyContent: "space-around",

    minWidth: "200px",
  },
  item: {
    listStyle: "none",
  },
  logo: {
    maxHeight: "100px",
  },
};
