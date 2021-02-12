import React, { useState } from "react";

function News() {
  const [news, setNews] = useState([
    {
      title: "Award winning style",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      title: "Friend of the planet",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      title: "If only animals could use it too",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
  ]);
  return (
    <div style={styles.container}>
      <h1>Dry John News</h1>
      <div style={styles.entries}>
        {news.map((entry) => (
          <div>
            <h1>{entry.title}</h1>
            <p>{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

const styles = {
  container: {
    color: "#fff",
    backgroundColor: "#3485BC",
    
  },
  entries: {
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
  },
  path: {
    position: "relative",
    zIndex: 2,
  },
  fish: {
    position: "relative",
    padding: "1em",
    margin: "1em",
    width: "100%",
    transform: "translateX(300px)",
    zIndex: 2,
  },
};
