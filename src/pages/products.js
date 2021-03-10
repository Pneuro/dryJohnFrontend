import React from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import ImageGallery from "react-image-gallery";

import Footer from "../components/Footer";
import HowTo from "../components/HowTo";

function productPage() {
  const tied = "/Assets/Images/SlideshowImages/tiedup.jpg";
  const topDown = "/Assets/Images/SlideshowImages/topdownview.jpg";
  const trashbucket = "/Assets/Images/SlideshowImages/TrashBucket.jpg";
  const imageThree = "/Assets/Images/SlideshowImages/imageThree.jpg";
  const imageThreeThumb = "/Assets/Images/SlideshowImages/imageThreeThumb.png";
  const imageFour = "/Assets/Images/SlideshowImages/imageFour.jpg";
  const imageFourThumb = "/Assets/Images/SlideshowImages/imageFourThumb.png";
  const imageFive = "/Assets/Images/SlideshowImages/imageFive.jpg";
  const imageFiveThumb = "/Assets/Images/SlideshowImages/imageFiveThumb.png";

  const images = [
    {
      original: tied,
      thumbnail: tied,
      description: "1 The easiest way to transport human waste out of nature.",
    },
    {
      original: topDown,
      thumbnail: topDown,
      description: "2 The easiest way to transport human waste out of nature.",
    },
    {
      original: trashbucket,
      thumbnail: trashbucket,
      description: "3 The easiest way to transport human waste out of nature.",
    },

    {
      original: imageThree,
      thumbnail: imageThreeThumb,
      description: "4 Easy",
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

      <HowTo />
      <ImageGallery items={images} />
      <Footer />
    </>
  );
}

export default productPage;
