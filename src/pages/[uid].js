//pages/[uid].js
import React from "react";
import { Client, linkResolver } from "../prismic-configuration.js";

const Post = ({ posts }) => {
  const post = doc.data;
  return (
    <div>
      <h1>{RichText.asText(post.title)}</h1>
      <h3>{RichText.asText(post.description)}</h3>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const client = Client();
  const doc = await client.getByUID("page", params.uid);

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  return {
    // You can run a separate query here to get dynamic parameters from your documents.
    paths: [{ params: { uid: "1" } }, { params: { uid: "2" } }],
    fallback: true,
  };
}

export default Post;
