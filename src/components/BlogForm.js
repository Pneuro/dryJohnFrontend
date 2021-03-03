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
  console.log(image);

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("file", image.raw);
    // Write some logic to ALSO send this image and the URL to it to Cloudinary to solve all the problems
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
        ""
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
