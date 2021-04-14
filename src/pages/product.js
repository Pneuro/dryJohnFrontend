import React from "react";
import Nav from "../components/Nav";
import ImageGallery from "react-image-gallery";

import Footer from "../components/Footer";
import HowTo from "../components/HowTo";

function productPage() {
  const tied = "/Assets/Images/SlideshowImages/tiedup.jpg";
  const topDown = "/Assets/Images/SlideshowImages/topdownview.jpg";
  const trashbucket = "/Assets/Images/SlideshowImages/TrashBucket.jpg";
  const imageThree = "/Assets/Images/SlideshowImages/imageThree.jpg";
  const imageThreeThumb = "/Assets/Images/SlideshowImages/imageThreeThumb.png";

  const imageFive = "/Assets/Images/SlideshowImages/imageFive.jpg";
  const imageFiveThumb = "/Assets/Images/SlideshowImages/imageFiveThumb.png";
  const label = "/Assets/Images/productlabel_600w.jpg";

  const images = [
    {
      original: label,
      thumbnail: label,
      description: "1/6",
    },
    {
      original: tied,
      thumbnail: tied,
      description: "2/6",
    },
    {
      original: topDown,
      thumbnail: topDown,
      description: "3/6",
    },
    {
      original: trashbucket,
      thumbnail: trashbucket,
      description: "4/6",
    },

    {
      original: imageThree,
      thumbnail: imageThreeThumb,
      description: "5/6",
    },

    {
      original: imageFive,
      thumbnail: imageFiveThumb,
      description: "6/6",
    },
  ];

  return (
    <>
      <Nav />
      <h1 style={{ textAlign: "center", padding: "1em", color: "#fff" }}>
        Product Images
      </h1>
      <ImageGallery items={images} />
      <Footer />
    </>
  );
}

export default productPage;
