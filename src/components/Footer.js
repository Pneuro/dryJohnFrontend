import Image from "next/image";

function Footer() {
  return (
    <footer style={styles.container}>
      <Image src="/Assets/Images/logo.png" width={100} height={100} />

      <div style={styles.list}>
        <ul>
          <h3>About</h3>
          <li style={styles.listItem}>Information</li>
        </ul>
        <ul>
          <h3>Product</h3>
          <a href="/order" style={styles.item}>
            Order
          </a>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>Information</li>

          <li>Information</li>
        </ul>
        <ul>
          <h3>Administration</h3>
          <a href="/admin/login" exact style={styles.item}>
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
  listItem: {},
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  },
  logo: {
    maxWidth: "50%",
  },
};
