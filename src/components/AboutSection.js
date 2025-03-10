import { motion } from "framer-motion";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function About() {
  const styles = {
    wrapper: {
      backgroundColor: "#8DC84A",
      color: "#fff",
      position: "relative",
      zIndex: 1,
    },
    title: {
      textAlign: "center",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      position: "relative",
      padding: "5em 1em",
      zIndex: 1,
    },
    trees: {
      position: "absolute",
      transform: "translateX(0vw)",
      zIndex: 0,
    },
    text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    image: {
      maxWidth: "30vw",
      minWidth: "280px",
      justifySelf: "center",
      borderRadius: "5px",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>About Dry John</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="315.998"
        height="472.289"
        viewBox="0 0 315.998 472.289"
        style={styles.trees}
      >
        <path
          id="Path_523"
          data-name="Path 523"
          d="M4946.211-644.943l22.008-13.286,16.724,16.287,24.92-16.287,24.269,16.287,19.368-16.287s-20.782-139.543-19.368-196.707c1.359-54.935-60.285-31.091-59.758-28.34,13.525,70.524-28.162,235.289-28.162,235.289"
          transform="translate(-4892.916 1114.23)"
          fill="#8d5b2b"
        />
        <path
          id="Path_525"
          data-name="Path 525"
          d="M4946.211-716.67l15.754-9.51,11.971,11.659,17.838-11.659,17.372,11.659,13.864-11.659s-25.251-90.444-24.239-131.364-46.488-59.928-36.807-9.445-15.754,148.139-15.754,148.139"
          transform="translate(-4755.816 1017.351)"
          fill="#8d5b2b"
        />
        <path
          id="Path_526"
          data-name="Path 526"
          d="M4940.158-718.966c-12.825,9.722-3.543,37.892-18.177,28.173s-43.357-31.685-40.357-67.047,20.458-55.8,52.357-74.4,45.782-14.122,75.239,0,33.986,30.847,42.59,56.486,2.474,26.632-8.173,46.073-16.828,31.693-34.417,31.693-9.33-15.733-26.6-20.978S4952.983-728.688,4940.158-718.966Z"
          transform="translate(-4739.883 870.309)"
          fill="#5f8830"
        />
        <path
          id="Path_524"
          data-name="Path 524"
          d="M4903.326-647.517c-20.443-13.577-25.807-26.493-21.616-75.893s28.58-77.953,73.143-103.937,63.956-19.728,105.107,0,47.478,43.092,59.5,78.911,3.457,37.2-11.418,64.363-86.574,52-112.846,54.5S4923.769-633.941,4903.326-647.517Z"
          transform="translate(-4880.385 937.909)"
          fill="#517a21"
        />
        <path
          id="Path_528"
          data-name="Path 528"
          d="M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z"
          transform="translate(5284.493 -1235.54) rotate(180)"
        />
        <path
          id="Path_527"
          data-name="Path 527"
          d="M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z"
          transform="translate(5315.658 -1243.172) rotate(180)"
        />
        <path
          id="Path_529"
          data-name="Path 529"
          d="M5100.285-1243.172s-3.924-8.417-5.3-9.852-1.753-.211-2.027-.781.647-.8,2.027-3.218,4.361-8.832,5.3-9.127-2.316,7.1,0,9.127a8.958,8.958,0,0,0,3.31,1.646c1.659.613-.652.234-.652.83,0,1-.341-.3-2.658,1.523S5100.285-1243.172,5100.285-1243.172Z"
          transform="translate(5305.658 -1214.679) rotate(180)"
        />
      </svg>

      <div style={styles.container}>
        <img
          src="/Assets/Images/beach_pete.jpg"
          alt="Pete Phinney"
          style={styles.image}
        />

        <div style={styles.text}>
          <motion.p
            animate={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ maxWidth: "90vw", fontSize: "1.3em" }}
          >
            "I try and live what I say. I want the world to be a less polluted
            place. That’s a tall order. But if more of us do just a little bit
            more I believe we can make a noticeable difference. I take joy in
            knowing that for every Dry John toilet bag used, there is one less
            dose of human waste on the ground or in the water. Thank you so much
            for pitching in and helping make a difference! Sincerely, Pete
            Phinney" - founder of Dry John, LLC
          </motion.p>
          <div>
            <a href="https://www.instagram.com/dry.john/">
              <FaInstagram style={styles.link} size={"2em"} />
            </a>
            <a href="https://www.instagram.com/dry.john/">
              <FaFacebook style={styles.link} size={"2em"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
