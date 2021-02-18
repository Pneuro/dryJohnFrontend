import React from "react";

function VideoPlayer() {
  return (
    <>
      <h1 style={styles.text}>Dry John Ad</h1>
      <iframe
        style={styles.container}
        height="100%"
        src="https://www.youtube.com/embed/4hjWWTpcaG4"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default VideoPlayer;

const styles = {
  container: {
    overflow: "hidden",

    height: "100vh",
    width: "100%",
  },
  text: {
    color: "#3485bc",
  },
};
