import { RichText } from "prismic-reactjs";

export default function PostBody({ content }) {
  return (
    <div style={{ margin: "auto", maxWidth: "500px" }}>
      <div style={styles.wrapper}>
        <RichText render={content} />
      </div>
    </div>
  );
}
const styles = {
  wrapper: {
    color: "#3485bc",
    fontSize: "20px",
    fontWeight: "200",
  },
};
