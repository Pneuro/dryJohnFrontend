import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            <motion.p
              animate={{ opacity: [0, 1], y: [10, 0] }}
              
            >
              Home
            </motion.p>
          </Link>
          <Link to="/about" style={styles.item}>
            <motion.p
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ delay: .1 }}
            >
              About
            </motion.p>
          </Link>
          <Link to="/products" style={styles.item}>
            <motion.p
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ delay: .2 }}
            >
              Products
            </motion.p>
          </Link>
        </>
      ) : (
        <div style={styles.list}>
          <Link to="/" exact style={styles.item}>
            Homes
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
