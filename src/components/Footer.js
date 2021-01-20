import React from "react";

function Footer() {
  return (
    <footer style={styles.container}>
      <ul style={styles.list}>
        <h2>Stores</h2>
        <a href="https://www.amazon.com/">Amazon</a>
        <a href="https://www.dickssportinggoods.com/">Dicks Sporting Goods</a>
      </ul>
    </footer>
  );
}

export default Footer;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
};
