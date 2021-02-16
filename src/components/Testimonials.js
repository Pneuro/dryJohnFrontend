import React, { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: Math.random() * 1000,
      name: "Jane Smith",
      title: "Award winning style",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      id: Math.random() * 1000,
      name: "Jack Smith",
      title: "Friend of the planet",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
    {
      id: Math.random() * 1000,
      name: "John Schmidtt",
      title: "If only animals could use it too",
      review:
        "Dry John just won an award for being best in class, innovative and wonderful!",
    },
  ]);

  // const API = "https://dry-john.herokuapp.com";
  const headers = {
    header: {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      "Content-Type": "application/json",
    },
  };
  // Load the reviews
  useEffect(() => {
    fetch(`/reviews`, headers)
      .then((res) => res.json())
      .then((res) => setReviews(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.wrapper}>
      <h1>Testimonials</h1>
      <div style={styles.container}>
        {reviews.map((review) => (
          <div style={styles.testimonial}>
            <h3>{review.title}</h3>
            <p>{review.name}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

const styles = {
  wrapper: {
    backgroundColor: "#517A21",
    color: "#8DC84A",
    minHeight: "40vh",
    position: "relative",
    zIndex: 1,

    margin: "250px 0",
    padding: "1em",
  },
  container: {
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(375px, 1fr)",
    justifyContent: "center",
    alignItems: "center",
  },
  path: {
    position: "relative",
    zIndex: 2,
  },
  testimonial: {
    margin: "1em",
    padding: "1em",
    background: "#DBF0FF",
    borderRadius: "5px",
    color: "#333",
  },
};
