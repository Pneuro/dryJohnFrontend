import React from "react";
import logo from "./Images/logo.png";
import backgroundImage from "./Images/Box and Tube_dark.png";
function Header() {
  return (
    <div style={styles.container} class="header">
      <img src={logo} alt="Dry John Logo" style={styles.logo} />
      <p style={styles.p}>
        Dry John’s toilet bags are made from corn and contain natural media to
        absorb liquids and odors. Just deposit them in the garbage! Easy!
      </p>
    </div>
  );
}

export default Header;
const styles = {
  container: {
    height: "calc(100vh-100px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: "40vw",
    zIndex: 1,
  },
  background: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
  },
  p: {
    color: "#fff",
    maxWidth: "400px",
  },
};
