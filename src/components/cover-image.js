import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      style={{ maxWidth: "100%" }}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
