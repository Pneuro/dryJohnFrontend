import PropTypes from "prop-types";
import navLogo from "./Assets/Images/nav_logo.png";
import Burger from "./Burger";
import NavLinks from "./NavLinks";
function Nav({ mobile, navOpen, setNavOpen }) {
  return (
    <div style={styles.container}>
      <div>
        <img src={navLogo} alt="dry john logo" style={styles.logo} />
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

Nav.propTypes = {
  mobile: PropTypes.bool,
  navOpen: PropTypes.bool,
};

Nav.defaultProps = {
  mobile: false,
  navOpen: false,
};
