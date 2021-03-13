import React from "react";
import OfferingHand from "./OfferingHand";
import { motion } from "framer-motion";

function AboutHeader() {
  const styles = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr)",
      alignItems: "center",
      justifyContent: "center",
      background: "#DBF0FF",
      padding: "100px 0",
    },
    greeting: {
      maxWidth: "35vw",
      minWidth: "300px",
      margin: "auto",
      padding: "1em",
      color: "#fff",
      backgroundColor: "#333d",
      borderRadius: "5px",
    },
  };
  return (
    <div style={styles.wrapper}>
      <OfferingHand />
      <div style={styles.greeting}>
        <motion.h1 animate={{ y: [25, 0], duration: 0.3, opacity: [0, 1] }}>
          About Dry John
        </motion.h1>
        <motion.p
          animate={{ y: [25, 0], duration: 0.3, opacity: [0, 1], delay: 0.5 }}
        >
          Compostable toilet bags containing natural media to help soak up and
          solidify human waste.  Solid waste is much easier to transport out of
          nature and to the trash.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutHeader;
