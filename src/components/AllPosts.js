import { useEffect, useState } from "react";

function AllPosts({ showControls, baseUrl }) {
  const [posts, setPosts] = useState([
    {
      id: 419,
      title: "This is a template",
      body: "Template is a body",
      image: "",
    },
  ]);

  useEffect(() => {
    fetch(`${baseUrl}/get_posts`)
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.error(err));
  }, []);
  const handleEdit = (e) => {
    fetch(`/edit/${e}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  const handleDelete = (e) => {
    fetch(`${baseUrl}/delete/${e}`);
    console.log(e);
  };
  const styles = {
    post: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },
    article: {
      maxWidth: "500px",
    },
  };
  console.log(posts)
  return (
    <div style={styles.post}>
      {posts.map((post) => (
        <article style={styles.article} key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>{post.image}</p>
          {showControls ? (
            <div>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => handleEdit(post.id)}>Edit</button>
            </div>
          ) : (
            ""
          )}
        </article>
      ))}
    </div>
  );
}

export default AllPosts;

AllPosts.defaultProps = {
  showControls: false,
  baseUrl: "",
};
