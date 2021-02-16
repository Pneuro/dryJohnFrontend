import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/Images/logo.png";
import Burger from "./Burger";
function Nav() {
  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <div style={styles.container}>
      <div>
        <img src={Logo} alt="dry john logo" style={styles.logo} />
      </div>
      {!mobile ? (
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
        </ul>
      ) : (
        <Burger navOpen={navOpen} setNavOpen={setNavOpen} />
      )}
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
    position: "fixed",
    top: "0",
    width: "100vw",
    zIndex: 2,
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr)",
    width: '500px',
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
