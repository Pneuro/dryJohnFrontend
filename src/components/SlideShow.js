import React, { useState, useEffect } from "react";
import tied from "./Assets/Images/SlideshowImages/tiedup_small.png";
import topDown from "./Assets/Images/SlideshowImages/topdownview.png";

import "./styles.css";

export default function SlideShow({
  images = [tied, topDown],
  interval = 3000,
}) {
  const [thumbnails, setThumbnails] = useState([]);
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect((e) => {
    
    setThumbnails(images);
    setCurrentSlideStyle(
      {
        backgroundImage: "url('" + images[currentSlide] + "')",
      },
      []
    );

    if (currentSlide > 0) {
      setPreviousSlideStyle(
        {
          backgroundImage: "url('" + images[currentSlide - 1] + "')",
        },
        []
      );
    } else {
      setPreviousSlideStyle(
        {
          backgroundImage: "url('" + images[images.length - 1] + "')",
        },
        []
      );
    }

    if (currentSlide === images.length - 1) {
      setNextSlideStyle(
        {
          backgroundImage: "url('" + images[0] + "')",
        },
        []
      );
    } else {
      setNextSlideStyle(
        {
          backgroundImage: "url('" + images[currentSlide + 1] + "')",
        },
        []
      );
    }

    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [images, currentSlide, interval]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <section style={styles.wrapper} className="slideshow">
      <h1 style={styles.h1}>Product Images</h1>
      <div className="slide-holder">
        <section className="slide previous-slide">
          <div style={previousSlideStyle} className="slide-thumbnail"></div>
        </section>
        <section className="slide current-slide">
          <div style={currentSlideStyle} className="slide-thumbnail"></div>
        </section>
        <section className="slide next-slide">
          <div style={nextSlideStyle} className="slide-thumbnail"></div>
        </section>
      </div>

      <div className="slideshow-controller">
        <span onClick={previous}>Previous</span>
        <span onClick={next}>Next</span>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    zIndex: 4,
  },
  h1: {
    color: "#fff",
  },
};
