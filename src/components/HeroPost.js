import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Avatar from "../components/Avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section style={styles.wrapper}>
      <h2>Most Recent Post</h2>
      <div style={{ maxWidth: "80vw" }}>
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">
                <RichText render={title} />
              </a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    zIndex: 5,
  },
};
