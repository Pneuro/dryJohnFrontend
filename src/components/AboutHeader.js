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
      marginTop: "80px",
    },
    greeting: {
      maxWidth: "35vw",
      minWidth: "300px",
      margin: 'auto',
      padding: "1em",
      color: "#3485BC",
      backgroundColor: "#333c",
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
          Compostable toilet bags suited for camping, traveling, cross-country
          trips, hiking, biking, and other time where nature may call.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutHeader;
