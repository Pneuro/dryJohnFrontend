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
        The fact is too many of us are sending our human waste to the ground or
        directly in the water whenever a bathroom was not readily available.
        Through trial and error we developed the product that could prevent
        that: A compostable bag containing enough organic media to mostly
        solidify an adult dose of human waste.
      </p>
      <br />
      <p>
        Some steering along the way of development came from a water quality and
        sewage treatment expert who determined that our waste should not be
        scattered on land or in water - it's better off contained ina bag that
        will breakdown at the lined landfill.
      </p>
      <br />
      <p>
        Years later, now, it gives me a great feeling to konw that each Dry John
        toilet ag used is cancelling out the human waste that would otherwise be
        left on the ground or in the water.
      </p>
      <br />
      <p>
        I could write forever about the ebenfits of using Dry John but I'll try
        to spare you ... like the statistic that there are about 40 million
        households in the US who still use well water.
      </p>
      <br />
      <p>
        And if more and more of us are spreading out further to get away from it
        all, we're spreading out human waste and contamination further out and
        possibly contaminating their wells.
      </p>
      <br />
      <p>
        Join the movement to be better to our planet and people - take some Dry
        John toilet bags with you on your next adventure!
      </p>
    </div>
  );
}

Story.propTypes = {};

export default Story;
