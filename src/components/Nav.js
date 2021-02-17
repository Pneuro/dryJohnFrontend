import { useState, useEffect } from "react";

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
        <img src={Logo} alt="dry john logo" style={styles.logo} />
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
    width: "100vw",
    zIndex: 2,
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
