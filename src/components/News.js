import React, { useState } from "react";

function News() {
  const [news, setNews] = useState([
    {
      id: Math.random() * 1000,
      title: "Award winning style",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      id: Math.random() * 1000,
      title: "Friend of the planet",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      id: Math.random() * 1000,
      title: "If only animals could use it too",
      message:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
  ]);
  const styles = {
    container: {
      color: "#fff",
      backgroundColor: "#3485BC",
      position: "relative",
      zIndex: 1,
      marginTop: "500px",
    },
    title: {
      textAlign: "center",
    },
    entries: {
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
      padding: "1em",
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
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dry John News</h1>
      <div style={styles.entries}>
        {news.map((entry) => (
          <div key={entry.id}>
            <img src="" alt="placeholder" />
            <h1>{entry.title}</h1>
            <p>{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
