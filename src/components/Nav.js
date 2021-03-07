import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Image from "next/image";
import Burger from "./Burger";
import NavLinks from "./NavLinks";
function Nav() {
  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      console.log(window.innerWidth);
      setMobile(true);

      console.log(`Set mobile? ${mobile}`);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <div style={styles.container}>
      <div>
        {/* <img src={navLogo} alt="dry john logo" style={styles.logo} /> */}
        <Image src="/Assets/Images/nav_logo.png" height={60} width={100} />
      </div>
      {!mobile ? (
        <ul style={styles.list}>
          <NavLinks mobile={mobile} navOpen={navOpen} />
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
    minHeight: "80px",
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

Nav.propTypes = {
  mobile: PropTypes.bool,
  navOpen: PropTypes.bool,
};

Nav.defaultProps = {
  mobile: false,
  navOpen: false,
};
