import { Link } from "react-router-dom";
import Logo from "./Assets/Images/logo.png";

function Footer() {
  return (
    <footer style={styles.container}>
      <img src={Logo} alt="Dry John logo" style={styles.logo} />
      <div>
        <ul>
          <h3>About</h3>
          <li>Information</li>
        </ul>
        <ul>
          <h3>Product</h3>
          <li>Information</li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>Information</li>
        </ul>
        <ul>
          <h3>Administration</h3>
          <Link to="/admin/login" exact style={styles.item}>
            Login
          </Link>
        </ul>
      </div>
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
  logo: {
    maxWidth: "140px",
  },
};
