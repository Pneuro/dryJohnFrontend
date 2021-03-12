import { motion } from "framer-motion";
import Link from "next/link";
function NavLinks({ fontSize, mobile, navOpen }) {
  const styles = {
    item: {
      color: "#3485bc",
      textDecoration: "none",
      listStyle: "none",
      padding: "1em",
      fontSize: fontSize,
      fontWeight: "bold",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: 0,
      background: "#333e",
      width: "100vw",
      height: "100vh",
      zIndex: 1,
      fontSize: "24px",
    },
  };
  return (
    <>
      {!mobile ? (
        <div>
          <Link href="/" exact style={styles.item}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ delay: 0.2 }}
              href="/"
              exact
              style={styles.item}
            >
              Home
            </motion.a>
          </Link>
          <Link href="/about" style={styles.item}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ delay: 0.2 }}
              href="/"
              exact
              style={styles.item}
            >
              About
            </motion.a>
          </Link>
          <Link
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ delay: 0.3 }}
            href="/products"
            style={styles.item}
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ delay: 0.2 }}
              href="/"
              exact
              style={styles.item}
            >
              Products
            </motion.a>
          </Link>
        </div>
      ) : !navOpen ? (
        <div style={styles.list}>
          <a href="/" exact style={styles.item}>
            Home
          </a>
          <a href="/about" style={styles.item}>
            About
          </a>
          <a href="/products" style={styles.item}>
            Products
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavLinks;
