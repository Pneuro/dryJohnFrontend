import { useState, useEffect } from "react";
import AllPosts from "./AllPosts";

function News({ baseUrl }) {
  const [news, setNews] = useState([
    {
      id: Math.random() * 1000,
      title: "Award winning style",
      body:
        "Dry John just won an award for being best in class, innovative and wonderful!",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    },
    {
      id: Math.random() * 1000,
      title: "Friend of the planet",
      body:
        "Dry John just won an award for being best in class, innovative and wonderful!",

      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    },
    {
      id: Math.random() * 1000,
      title: "If only animals could use it too",
      body:
        "Dry John just won an award for being best in class, innovative and wonderful!",

      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    },
  ]);

  const styles = {
    container: {
      color: "#fff",
      backgroundColor: "#3485BC",
      position: "relative",
      zIndex: 1,

      padding: "1em",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",

      justifyContent: "center",
    },
    title: {
      textAlign: "center",
    },
    entries: {
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
      padding: "1em",
      margin: "1em",
      fontSize: "16px",
    },
    entry: {
      margin: "1em",
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
    entryImage: {
      width: "100%",
      borderRadius: "5px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dry John News</h1>
      <div style={styles.entries}>
        <AllPosts baseUrl={baseUrl} />
      </div>
    </div>
  );
}

export default News;
