import { useEffect, useState } from "react";

function AllPosts({ showControls, baseUrl }) {
  const [posts, setPosts] = useState([
    {
      id: 419,
      title: "This is a title",
      body: "This is a body",
      image: "this is image",
    },
  ]);

  useEffect(() => {
    fetch(`${baseUrl}/get_posts`)
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.error(err));
  }, []);
  // const handleEdit = (e) => {
  //   fetch(`/edit/${e}`)
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };
  const handleDelete = (e) => {
    fetch(`${baseUrl}/delete/${e}`);
    console.log(e);
  };
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>

          <p>{post.body}</p>
          {showControls ? (
            <div>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              {/* <button onClick={() => handleEdit(post.id)}>Edit</button> */}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default AllPosts;

AllPosts.defaultProps = {
  showControls: false,
};
