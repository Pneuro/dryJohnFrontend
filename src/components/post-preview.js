import Link from "next/link";
import { RichText } from "prismic-reactjs";

import Date from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            style={{ textDecoration: "none", color: "#3485bc" }}
            className="hover:underline"
          >
            <RichText render={title} />
          </a>
        </Link>
        <sub>click to visit</sub>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p
        style={{
          color: "#3485bc",
          fontSize: "21px",
          leading: "relaxed",
          marginBottom: "4em",
        }}
        className="text-lg leading-relaxed mb-4"
      >
        {excerpt}
      </p>
    </div>
  );
}
