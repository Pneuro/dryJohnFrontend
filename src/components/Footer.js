import React from "react";

function Footer() {
  return (
    <footer style={styles.container}>

      <p>Copyright &copy; 2021</p>
    </footer>
  );
}

export default Footer;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    margin: "auto",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
};
