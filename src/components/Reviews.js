import React, { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      title: "Award winning style",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      title: "Friend of the planet",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      title: "If only animals could use it too",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
  ]);
  return (
    <div style={styles.container}>
      <h1>Testimonials</h1>
      {reviews.map((review) => (
        <div>
          <h1>{review.title}</h1>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;

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
