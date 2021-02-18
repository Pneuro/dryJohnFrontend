import { Link } from "react-router-dom";
import Logo from "./Assets/Images/logo.png";

function Footer() {
  return (
    <footer style={styles.container}>
      <img src={Logo} alt="Dry John logo" style={styles.logo} />
      <div style={styles.list}>
        <ul>
          <h3>About</h3>
          <li style={styles.listItem}>Information</li>
        </ul>
        <ul>
          <h3>Product</h3>
          <Link to="/order" style={styles.item}>
            Order
          </Link>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>Information</li>

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
    color: "#fff",
    margin: "auto",
    marginTop: "60vh",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(90deg, #fffa, #333a)",
    border: "#ddd 1px solid",
    background: "rgb(229, 230, 229)",
    background:
      "-moz-linear-gradient(164deg, rgba(229,230,229,.7) 0%, rgba(134,164,184,1) 100%)",
    background:
      "-webkit-linear-gradient(164deg, rgba(229,230,229,.7) 0%, rgba(134,164,184,1) 100%)",
    background:
      "linear-gradient(164deg, rgba(229,230,229,.2) 0%, rgba(134,164,184,1) 100%)",
    borderBottom: "none",
    borderRadius: "10px 10px 0 0",
    width: "80vw",
    padding: "3em",
  },
  item: {
    textDecoration: "none",
    color: "#fff",
  },
  listItem: {},
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  },
  logo: {
    maxWidth: "50%",
  },
};
