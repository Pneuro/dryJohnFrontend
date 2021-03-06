import React from "react";
import PropTypes from "prop-types";

const Insta = () => {
  const instagramBaseApi = "api.instagram.com";
  useEffect(() => {
    fetch(`${instagramBaseApi}`).then(console.log(response));
  });
  return (
    <div>
      <h2>Title</h2>
      <p>Post Body</p>
      <p>Image</p>
    </div>
  );
};

Insta.propTypes = {};

export default Insta;
