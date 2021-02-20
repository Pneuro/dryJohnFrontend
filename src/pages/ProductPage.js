import React from "react";
import Nav from "../components/Nav";

import ImageGallery from "react-image-gallery";
import imageZero from "../components/Assets/Images/SlideshowImages/imageZero.jpg";
import imageZeroThumb from "../components/Assets/Images/SlideshowImages/imageZeroThumb.png";
import imageOne from "../components/Assets/Images/SlideshowImages/imageOne.jpg";
import imageOneThumb from "../components/Assets/Images/SlideshowImages/imageOneThumb.png";
import imageTwo from "../components/Assets/Images/SlideshowImages/imageTwo.jpg";
import imageTwoThumb from "../components/Assets/Images/SlideshowImages/imageTwoThumb.png";
import imageThree from "../components/Assets/Images/SlideshowImages/imageThree.jpg";
import imageThreeThumb from "../components/Assets/Images/SlideshowImages/imageThreeThumb.png";
import imageFour from "../components/Assets/Images/SlideshowImages/imageFour.jpg";
import imageFourThumb from "../components/Assets/Images/SlideshowImages/imageFourThumb.png";
import imageFive from "../components/Assets/Images/SlideshowImages/imageFive.jpg";
import imageFiveThumb from "../components/Assets/Images/SlideshowImages/imageFiveThumb.png";
import Footer from "../components/Footer";
function ProductPage() {
  const images = [
    {
      original: imageZero,
      thumbnail: imageZeroThumb,
      description: "0 The easiest way to transport human waste out of nature.",
    },
    {
      original: imageOne,
      thumbnail: imageOneThumb,
      description: "1 The easiest way to transport human waste out of nature.",
    },
    {
      original: imageTwo,
      thumbnail: imageTwoThumb,
      description: "2 The easiest way to transport human waste out of nature.",
    },

    {
      original: imageThree,
      thumbnail: imageThreeThumb,
      description: "3 The easiest way to transport human waste out of nature.",
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
      <Footer />
    </>
  );
}

export default ProductPage;
