import React from "react";

function News() {
  return (
    <div style={styles.container}>
      <svg
        style={styles.path}
        xmlns="http://www.w3.org/2000/svg"
        width="100vw"
        height="83.304"
        viewBox="0 0 2122.981 83.304"
      >
        <path
          id="Path_488"
          data-name="Path 488"
          d="M3917.691,176c-104.146-17.928,396.491-26.937,669.845-28.625s316.708,24.757,577.567,21.875,261.293-35.089,465.87-33.4S6140.125,155.19,5983.412,176s-501.361,43.089-979.292,43.089S4021.838,193.928,3917.691,176Z"
          transform="translate(-3903.656 -135.785)"
          fill="#3485bc"
        />
      </svg>

      <h1>Dry John News</h1>
      s
    </div>
  );
}

export default News;

const styles = {
  container: {
    backgroundColor: "##3485BC",
    overflow: "hidden",
  },
  path: {
    
    position: "relative",
    zIndex: 2,
  },
};
