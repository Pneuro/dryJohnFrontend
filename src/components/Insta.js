import { useEffect, useState } from "react";

const Insta = () => {
  const [igPosts, setIgPosts] = useState([]);
  const instagramBaseApi = "api.instagram.com";
  const userAccessToken = "";
  useEffect(() => {
    fetch(
      `${instagramBaseApi}/${userAccessToken}?fields=id, media_url, username, timestamp, caption`
    ).then((res) => console.log(res));
  }, []);
  const styles = {
    wrapper: {
      display: "grid",
      position: "relative",
      zIndex: 5,
    },
  };
  return (
    <div style={styles.wrapper}>
      <h2>Title</h2>
      <p>Post Body</p>
      <p>Image</p>
    </div>
  );
};

export default Insta;
