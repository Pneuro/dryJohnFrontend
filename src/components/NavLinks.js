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
      cursor: "pointer",
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
          <Link href="/" style={styles.item}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ delay: 0.2 }}
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
              style={styles.item}
            >
              About
            </motion.a>
          </Link>
          <Link
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ delay: 0.3 }}
            href="/product"
            style={styles.item}
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ delay: 0.2 }}
              style={styles.item}
            >
              Product
            </motion.a>
          </Link>
        </div>
      ) : !navOpen ? (
        <div style={styles.list}>
          <Link href="/" style={styles.item}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              style={styles.item}
            >
              Home
            </motion.a>
          </Link>
          <Link href="/about" style={styles.item}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              style={styles.item}
            >
              About
            </motion.a>
          </Link>
          <Link
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            href="/product"
            style={styles.item}
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              style={styles.item}
            >
              Products
            </motion.a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavLinks;
