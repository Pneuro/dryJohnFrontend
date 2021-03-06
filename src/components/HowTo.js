import imageOne from "./Assets/Images/How_to images/Screen Shot -1.png";
import imageTwo from "./Assets/Images/How_to images/Screen Shot -2.png";
import imageThree from "./Assets/Images/How_to images/Screen Shot -3.png";
import imageFour from "./Assets/Images/How_to images/Screen Shot -4.png";
import imageFive from "./Assets/Images/How_to images/Screen Shot -5.png";
import imageSix from "./Assets/Images/How_to images/Screen Shot -6.png";
import imageSeven from "./Assets/Images/How_to images/pooping.png";
const HowTo = () => {
  const styles = {
    container: {
      display: "grid",
      justifyContent: "center",
      gap: "1em",
    },
    step: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      backgroundColor: "#3485bc",
      padding: "1em",
      borderRadius: "5px",
      color: "#fff",
    },
    paragraph: {
      fontSize: "16px",
    },
    image: {
      justifySelf: "end",
    },
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#3485bc" }}>How to use</h1>
      <section style={styles.container}>
        <div style={styles.step}>
          <p style={styles.paragraph}>
            Step One: Place the bag inside 5 gallon or smaller container
          </p>
          <img alt="Product" style={styles.image} src={imageOne} />
        </div>

        <div style={styles.step}>
          <p style={styles.paragraph}>Step Two: Untie/Open it</p>
          <img alt="Product" style={styles.image} src={imageTwo} />
        </div>

        <div style={styles.step}>
          <p style={styles.paragraph}>
            Step Three: After use, retie the bag. The contents should solidify
            or turn into transportable solid within one hour after use,
            dimishing spilling or leakage
          </p>
          <img alt="Product" style={styles.image} src={imageThree} />
        </div>

        <div style={styles.step}>
          <p style={styles.paragraph}>
            Step Four: Dispose of properly in a trash container.
          </p>
          <img alt="Product" style={styles.image} src={imageFour} />
        </div>

        <div style={styles.step}>
          <p style={styles.paragraph}>
            Step Five: Place the bag inside 5 gallon or smaller container
          </p>
          <img alt="Product" style={styles.image} src={imageFive} />
        </div>
        <div style={styles.step}>
          <p style={styles.paragraph}>Step Six: Hit the target</p>
          <img alt="Product" style={styles.image} src={imageSix} />
        </div>
        <div style={styles.step}>
          <p style={styles.paragraph}>
            Step Seven: Clean up the mess in an eco-friendly way!
          </p>
          <img alt="Product" style={styles.image} src={imageSeven} />
        </div>
      </section>
    </div>
  );
};

export default HowTo;
