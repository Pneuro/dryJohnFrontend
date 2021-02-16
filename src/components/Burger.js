import React from "react";

function Burger({ navOpen, setNavOpen }) {
  const styles = {
    burger: {
      maxWidth: "30px",
      maxHeight: "30px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5px",
      border: "none",
      transition: ".3s ease all",
    },
    line1: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
    },
    line2: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
    },
    line3: {
      width: "25px",
      height: "3px",
      backgroundColor: "#3485bc",
      margin: "3px",
      transition: ".3 ease all",
    },
    line1Open: {
      width: "25px",
      height: "3px",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all",
      transform: "rotate(45deg)translateY(5px)",
    },
    line2Open: {
      width: "25px",
      height: "0",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all",
    },
    line3Open: {
      width: "25px",
      height: "3px",
      backgroundColor: "#8dc84a",
      margin: "3px",
      transition: ".3 ease all",
      transform: "rotate(-45deg)translateY(-5px) ",
    },
  };
  return (
    <div style={styles.burger}>
      {!navOpen ? (
        <div onClick={() => setNavOpen(true)}>
          <div style={styles.line1}></div>
          <div style={styles.line2}></div>
          <div style={styles.line3}></div>
        </div>
      ) : (
        <div onClick={() => setNavOpen(false)}>
          <div style={styles.line1Open}></div>
          <div style={styles.line2Open}></div>
          <div style={styles.line3Open}></div>
                  </div>
                  
      )}
    </div>
  );
}

export default Burger;
