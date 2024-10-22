import { RichText } from "prismic-reactjs";
import Avatar from "../components/Avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <article style={styles.wrapper}>
      <PostTitle>{title[0].text}</PostTitle>
      <div style={{ margin: "auto", maxWidth: "500px" }}>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={RichText.asText(title)} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </article>
  );
}

const styles = {
  wrapper: {
    maxWidth: "500px",
    margin: "auto",
  },
};
