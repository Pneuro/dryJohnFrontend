

function Footer() {
  return (
    <footer style={styles.container}>
      <img
        src="/Assets/Images/logo.png"
        alt="footer logo"
        style={styles.logo}
      />
      <div style={styles.list}>
        <ul>
          <h3>About</h3>
          <li style={styles.listItem}>
            <a style={styles.item} href="/about">
              More Information
            </a>
          </li>
        </ul>
        <ul>
          <h3>Product</h3>
          <a href="/order" style={styles.item}>
            Order
          </a>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li style={styles.listItem}>
            <a style={styles.item} href="#">
              Phone
            </a>
          </li>

          <li style={styles.listItem}>
            <a style={styles.item} href="#">
              Email
            </a>
          </li>
        </ul>
        <ul>
          <h3>Administration</h3>
          <a style={styles.item} href="/admin" exact style={styles.item}>
            Login
          </a>
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
    marginTop: "20vh",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,

    border: "#ddd 1px solid",

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
  listItem: {
    listStyle: "none",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  },
  logo: {
    maxWidth: "50%",
  },
};
