import { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration.js";

function AllPosts({ showControls }) {
  const [posts, setPosts] = useState([{ id: 1 }, { id: 2 }]);


  // Link Resolver
  function linkResolver(posts) {
    // Define the url depending on the postsument type
    if (posts.type === "page") {
      return "/page/" + posts.uid;
    } else if (posts.type === "blog_post") {
      return "/blog/" + posts.uid;
    }

    // Default to homepage
    return "/";
  }
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
export async function getStaticProps({params}) {
  const client = Client();
  const doc = await client.getByUID('page', params.uid)

  return {
    props: {
      doc,
    },
  }
}
const styles = {
  post: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1em",
    wordBreak: "keep-all",
  },
  article: {
    maxWidth: "500px",
  },
};

export async function getStaticPaths() {
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: [{ params: { uid: "1" } }, { params: { uid: "2" } }],
    fallback: true,
  };
}
export default AllPosts;

