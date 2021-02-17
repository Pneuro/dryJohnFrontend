import React from "react";
import video from "./Assets/Videos/LQ_nologo.mp4";
function Video() {
  return (
    <>
      <video src={video} autoplay loop muted />
    </>
  );
}

export default Video;
