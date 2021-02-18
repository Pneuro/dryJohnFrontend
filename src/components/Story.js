import React from "react";
import PropTypes from "prop-types";

function Story(props) {
  const styles = {
    wrapper: {
      maxWidth: "80vw",
      margin: "1em auto",
      backgroundColor: "#517A21",
      color: "#fff",
      padding: "1em",

      borderRadius: "5px",
    },
  };
  
  return (
    <div style={styles.wrapper}>
      <h1>The Dry John Story</h1>
      <p>
        Dry John toilet bags were developed in an effort to protect Lake Erie
        from those that would otherwise deposit their human waste in it. Human
        waste needs to be carried out from all of our beautiful nature!
      </p>
    </div>
  );
}

Story.propTypes = {};

export default Story;
