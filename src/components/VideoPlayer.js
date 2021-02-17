import React from "react";

function VideoPlayer() {
  return (
    <>
      <iframe
        style={styles.container}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/jCwZVqUzC44"
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
  },
};
