import React from "react";

function Story() {
  const styles = {
    wrapper: {
      margin: "1em auto",
      backgroundColor: "#517a21",
      color: "#fff",
      padding: "1em",
      margin: "auto",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(1fr 1fr, 1fr))",
      maxWidth: "500px",
      gap: "5em",
      margin: "auto",
      lineHeight: "1.6",
    },
  };

  return (
    <div id="info" style={styles.wrapper}>
      <h1 style={{ textAlign: "center", padding: "2em" }}>
        The Dry John Story
      </h1>
      <div style={styles.container}>
        <p>
          The fact is too many of us are sending our human waste to the ground
          or directly in the water whenever a bathroom was not readily
          available. Through trial and error we developed the product that could
          prevent that: A compostable bag containing enough organic media to
          mostly solidify an adult dose of human waste.
        </p>

        <p>
          Some steering along the way of development came from a water quality
          and sewage treatment expert who determined that our waste should not
          be scattered on land or in water - it's better off contained in a bag
          that will breakdown at the lined landfill.
        </p>

        <p>
          Years later, now, it gives me a great feeling to know that each Dry
          John toilet bag used is cancelling out the human waste that would
          otherwise be left on the ground or in the water.
        </p>

        <p>
          I could write forever about the benfits of using Dry John but I'll
          try to spare you ... like the statistic that there are about 40
          million households in the US who still use well water.
        </p>

        <p>
          And if more and more of us are spreading out further to get away from
          it all, we're spreading out human waste and contamination further out
          and possibly contaminating their wells.
        </p>

        <p>
          Join the movement to be better to our planet and people - take some
          Dry John toilet bags with you on your next adventure!
        </p>
      </div>
    </div>
  );
}

export default Story;
