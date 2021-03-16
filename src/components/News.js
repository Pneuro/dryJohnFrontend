import { useState, useEffect } from "react";
import AllPosts from "./AllPosts";
import HeroPost from "./HeroPost";

function News({ heroPost }) {
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
    wrapper: {
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
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
    },
    entryImage: {
      width: "100%",
      borderRadius: "5px",
    },
  };
  return (
    <div style={styles.wrapper} className="news">
      <h1 style={styles.title}>Dry John News</h1>
      <div style={styles.entries}>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverimage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost._meta.uid}
          excerpt={heroPost.excerpt}
        />
      </div>
    </div>
  );
}

export default News;

News.defaultProps = {
  baseUrl: "https://dry-john-backend.herokuapp.com/",
};
