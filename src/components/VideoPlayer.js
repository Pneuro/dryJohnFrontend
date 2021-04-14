import React from "react";

function VideoPlayer() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.text}>Dry John Video</h1>
      <iframe
        style={styles.container}
        height="100%"
        src="https://www.youtube.com/embed/sPDpabYSQg4"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;

const styles = {
  wrapper: {
    backgroundColor: "#7dcdd6",
  },
  container: {
    overflow: "hidden",
    margin: "auto",
    display: "flex",
    height: "100vh",
    width: "80%",
  },
  text: {
    color: "#3485bc",
    textAlign: "center",
    margin: "2em",
  },
};
