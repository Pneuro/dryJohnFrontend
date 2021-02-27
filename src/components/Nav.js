import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Assets/Images/logo.png";
import Burger from "./Burger";
import NavLinks from "./NavLinks";
function Nav() {
  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [fontSize, setFontSize] = useState("");
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div style={styles.container}>
      <div>
        <motion.img
          animate={{ rotate: [0, 720, 0], scale: [1, 1.5, 1] }}
          transition={{ delay: 2 }}
          src={Logo}
          alt="dry john logo"
          style={styles.logo}
        />
      </div>
      {!mobile ? (
        <ul style={styles.list}>
          <NavLinks fontSize={fontSize} setFontSize={setFontSize} />
        </ul>
      ) : (
        <Burger navOpen={navOpen} setNavOpen={setNavOpen} mobile={mobile} />
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
    position: "sticky",
    top: "0",
    maxWidth: "100vw",
    zIndex: 2,
    marginBottom: "-50px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr)",
    width: "500px",
  },

  logo: {
    maxHeight: "90px",
  },
};
