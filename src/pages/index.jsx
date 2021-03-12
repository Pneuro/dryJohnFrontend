import Nav from "../components/Nav";
import Header from "../components/Header";
import Scene from "../components/Scene";
import News from "../components/News";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Testimonials";
import Footer from "../components/Footer";
import Head from "next/head";
function index() {
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
      <News />

      <AboutSection />
      <Reviews />
      <Footer />
    </div>
  );
}

export default index;
