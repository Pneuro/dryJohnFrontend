import React, { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
function Reviews() {
  const [data, setReviews] = useState([
    {
      id: "1",
      asin: { original: "B078X3TCRG", variant: "" },
      review_data: "Reviewed in the United States on July 2, 2020",
      date: { date: "July 2, 2020", unix: 1593655200 },
      name: "geb49",
      rating: 5,
      title: "BEST EVER..",
      review:
        "FOR THOSE OF YOU WHO KNOW WHAT IT'S LIKE TO HAVE A TOILET NOT WORKING IN AN RV THIS IS THE PERFECT BACK UP! NO PUN INTENDED!!!! NO SMELLAND CAN ENGAGE ON A MAKE SHIFT TOILET ANYWHERE..",
      verified_purchase: true,
    },
    {
      id: "2",
      asin: { original: "B078X3TCRG", variant: "" },
      review_data: "Reviewed in the United States on July 2, 2020",
      date: { date: "February 8, 2018", unix: 1593655200 },
      name: "geb49",
      rating: 5,
      title: "Great product and is environmentally friendly.",
      review:
        "Excellent Product! Works perfectly with the toilet when having plumbing issues. Plan to use this also for camping (RV or tent) boating and traveling. The organic media absorbs odor and the bags are compostable. Will definitely reorder! ",
      verified_purchase: true,
    },
    {
      id: "3",
      asin: { original: "B078X3TCRG", variant: "" },
      review_data: "Reviewed in the United States on December 24, 2019",
      date: { date: "December 24, 2019", unix: 1593655200 },
      name: "geb49",
      rating: 5,
      title: "Camper's secret weapon.",
      review:
        "Great camping tool. Great for short distance travel in one's travel van , camper or SUV. ",
      verified_purchase: true,
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
  // useEffect(() => {
  //   fetch(`/reviews`, headers)
  //     .then((res) => res.json())
  //     .then((res) => setReviews(res))
  //     .catch((err) => console.error(err));
  // }, [data]);
  const star = <FaStar />;
  return (
    <div style={styles.wrapper}>
      <h1>Testimonials</h1>
      <div style={styles.container}>
        {data.map((review) => (
          <div style={styles.testimonial}>
            <h1>{review.title}</h1>
            <p>
              {star}
              {star}
              {star}
              {star}
              {star}
            </p>
            <p>{review.review}</p>
            <br />
            <p>{review.date.date}</p>
          </div>
        ))}
      </div>
      <p>
        Reviews pulled from Amazon.com. to visit, <a to="/order">click here.</a>
      </p>
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
    padding: "1em",
  },
  container: {
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(375px, 1fr)",
    justifyContent: "center",
    gap: "2em",
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
