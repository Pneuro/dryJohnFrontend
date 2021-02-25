import React from "react";
import Nav from "../components/Nav";

import ImageGallery from "react-image-gallery";
import tied from "../components/Assets/Images/SlideshowImages/tiedup_small.png";
import topDown from "../components/Assets/Images/SlideshowImages/topdownview.png";
import trashbucket from "../components/Assets/Images/SlideshowImages/TrashBucket.png";

import imageThree from "../components/Assets/Images/SlideshowImages/imageThree.jpg";
import imageThreeThumb from "../components/Assets/Images/SlideshowImages/imageThreeThumb.png";
import imageFour from "../components/Assets/Images/SlideshowImages/imageFour.jpg";
import imageFourThumb from "../components/Assets/Images/SlideshowImages/imageFourThumb.png";
import imageFive from "../components/Assets/Images/SlideshowImages/imageFive.jpg";
import imageFiveThumb from "../components/Assets/Images/SlideshowImages/imageFiveThumb.png";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
function ProductPage() {
  const images = [
    // {
    //   original: imageOne,
    //   thumbnail: imageOneThumb,
    //   description: "1 The easiest way to transport human waste out of nature.",
    // },
    {
      original: tied,
      thumbnail: tied,
      description: "1 The easiest way to transport human waste out of nature.",
    },
    {
      original: topDown,
      thumbnail: topDown,
      description: "1 The easiest way to transport human waste out of nature.",
    },
    {
      original: trashbucket,
      thumbnail: trashbucket,
      description: "1 The easiest way to transport human waste out of nature.",
    },

    {
      original: imageThree,
      thumbnail: imageThreeThumb,
      description: "Easy",
    },
    {
      original: imageFour,
      thumbnail: imageFourThumb,
      description: "4 The easiest way to transport human waste out of nature.",
    },
    {
      original: imageFive,
      thumbnail: imageFiveThumb,
      description: "5 The easiest way to transport human waste out of nature.",
    },
  ];

  return (
    <>
      <Nav />
      <h1>Product</h1>
      <ImageGallery items={images} />
      <SlideShow />
      <Footer />
    </>
  );
}

export default ProductPage;
