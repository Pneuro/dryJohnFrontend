import { RichText } from "prismic-reactjs";

export default function PostBody({ content }) {
  return (
    <div style={{ margin: "auto", maxWidth: "500px" }}>
      <div>
        <RichText render={content} />
      </div>
    </div>
  );
}
