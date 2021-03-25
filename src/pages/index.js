import Nav from "../components/Nav";
import Header from "../components/Header";
import Scene from "../components/Scene";
import News from "../components/News";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Testimonials";
import Footer from "../components/Footer";

import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";

function index({ preview, allPosts }) {
  const heroPost = allPosts[0].node;

  const morePosts = allPosts.slice(1);
  return (
    <div>
      <Head>
        <title>Dry John Toilet Bags</title>
        <meta property="og:title" content="Dry John Toilet Bags" />
        <meta name="" content="" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta
          property="og:video"
          content="https://www.dry-john.com/Assets/Videos/LQ_nologo.mp4"
        />
        <meta name="og:type" content="website" />
        <meta name="rating" content="safe for kids" />
        <meta
          name="og:image"
          content="https://www.dry-john.com/Assets/Images/header_logo.png"
        />
        <meta
          name="description"
          content="Dry John Toilet Bags for securing your waste in nature"
        />
        <meta
          name="keywords"
          content="Dry John, Camping, Eco, Eco-friendly, compostable, toilet bags"
        />
        <meta name="copyright" content="Dry John LLC" />
        <meta name="url" content="http://www.dry-john.com" />
        <meta property="twitter:title" content="Dry John Toilet Bags" />
        <meta property="Author" content="Neuro Design Agency" />
      </Head>
      <Nav />
      <Header />
      <Scene />
      <News heroPost={heroPost} preview={preview} morePosts={morePosts} />
      <AboutSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default index;

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  return {
    props: { preview, allPosts },
  };
}
