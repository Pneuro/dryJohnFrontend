import Nav from "../components/Nav";
import Header from "../components/Header";
import Scene from "../components/Scene";
import News from "../components/News";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Testimonials";
import Footer from "../components/Footer";

import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";

import { CMS_NAME } from "../lib/constants";
function index({ preview, allPosts }) {
  const heroPost = allPosts[0].node;

  const morePosts = allPosts.slice(1);
  return (
    <div>
      <Head>
        <title>Dry John</title>
        <meta
          name="description"
          content="Dry John Toilet Bags for securing your waste in nature"
        />
        <meta
          name="keywords"
          content="Dry John, Camping, Eco, Eco-friendly, compostable, toilet bags"
        />
        <meta property="twitter:title" content="Dry John Toilet Bags" />
      </Head>
      <Nav />
      <Header />
      <Scene />
      <News heroPost={heroPost} preview={preview} />

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
