import React, { useState, useEffect } from "react";

function Reviews() {
  const [data, setReviews] = useState([
    {
      id: "RBMUHEO1JRPY2",
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
      id: "RBMUHEO2JRPY2",
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
      id: "RBMTHEO1JRPY2",
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
  const star = "*";
  return (
    <div style={styles.wrapper}>
      <h1>Testimonials</h1>
      <div style={styles.container}>
        {data.map((review) => (
          <div style={styles.testimonials}>
            <h1>{review.title}</h1>

            <p>{review.review}</p>
            <p>{review.date.date}</p>
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
