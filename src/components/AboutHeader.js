import React from "react";
import OfferingHand from "./OfferingHand";

function AboutHeader() {
  const styles = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr)",
      alignItems: "center",
      justifyContent: "center",
      background: "#DBF0FF",
    },
    greeting: {
      maxWidth: "35vw",
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
        <h1>About Dry John</h1>
        <p>
          Compostable toilet bags suited for camping, traveling, cross-country
          trips, hiking, biking, and other time where nature may call.
        </p>
      </div>
    </div>
  );
}

export default AboutHeader;
