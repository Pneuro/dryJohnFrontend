import { Link } from "react-router-dom";

function NavLinks({ fontSize, setFontSize, mobile, navOpen }) {
  const styles = {
    item: {
      color: "#3485bc",
      textDecoration: "none",
      listStyle: "none",
      padding: "1em",
      fontSize: fontSize,
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: 0,
      background: "#333d",
      width: "100vw",
      height: "100vh",
      zIndex: 1,
    },
  };
  return (
    <>
      {!mobile && !navOpen ? (
        <>
          <Link to="/" exact style={styles.item}>
            Home
          </Link>
          <Link to="/about" style={styles.item}>
            About
          </Link>
          <Link to="/products" style={styles.item}>
            Products
          </Link>
        </>
      ) : (
        <div style={styles.list}>
          <Link to="/" exact style={styles.item}>
            HomeB
          </Link>
          <Link to="/about" style={styles.item}>
            About
          </Link>
          <Link to="/products" style={styles.item}>
            Products
          </Link>
        </div>
      )}
    </>
  );
}

export default NavLinks;
