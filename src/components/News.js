import { useState, useEffect } from "react";
import AllPosts from "./AllPosts";

function News({ baseUrl }) {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const styles = {
    container: {
      color: "#fff",
      backgroundColor: "#3485BC",
      position: "relative",
      zIndex: 1,
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
    <div style={styles.container} className="news">
      <h1 style={styles.title}>Dry John News</h1>
      <div style={styles.entries}>
        <AllPosts baseUrl={baseUrl} />
      </div>
    </div>
  );
}

export default News;

News.defaultProps = {
  baseUrl: "https://dry-john-backend.herokuapp.com/",
};
