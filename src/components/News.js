import { useState, useEffect } from "react";
import HeroPost from "./HeroPost";

function News({ heroPost }) {
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
      gridTemplateColumsn: "1fr",
      maxWidth: "500px",
      padding: "1em",
      margin: "auto",
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
