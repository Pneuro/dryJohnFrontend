import { useState } from "react";
import PropTypes from "prop-types";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState({ preview: "", raw: "", title, body });

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);
  const onImageChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
        text: title,
        body: body,
      });
    }
  };
  console.log(title, body, image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [title, body, image];
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/blog_entry", header)
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image.text);
    formData.append("file", image.body);
    formData.append("file", image.raw);
    console.log(`FormData: ${formData.getAll("file")}`);
    const imageHeader = {
      method: "POST",

      body: formData,
    };
    fetch("/image_entry", imageHeader)
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
  };

  const styles = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      maxWidth: "400px",
    },
    image: {
      borderRadius: "5px",
    },
    input: {
      margin: "1em",
    },
  };
  return (
    <form method="POST" onSubmit={handleImageSubmit} style={styles.wrapper}>
      <h2>Post Entry Form</h2>
      <input
        name="title"
        placeholder="Title"
        type="text"
        onChange={onTitleChange}
        style={styles.input}
      />

      <textarea
        name="body"
        style={{ fontSize: "12px" }}
        placeholder="Body"
        type="textarea"
        onChange={onBodyChange}
        rows="10"
        style={styles.input}
      />
      <input
        name="file"
        placeholder="Image"
        type="file"
        required={true}
        onChange={onImageChange}
        style={styles.input}
      />
      <button style={styles.input} type="submit">
        Submit
      </button>
      {image.preview ? (
        <img
          src={image.preview}
          style={styles.image}
          alt="dummy"
          width="100%"
          height="100%"
        />
      ) : (
        <p>Upload an image</p>
      )}
    </form>
  );
};

BlogForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.object,
};

export default BlogForm;
