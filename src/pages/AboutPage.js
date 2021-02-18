import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
import Nav from "../components/Nav";
import VideoPlayer from "../components/VideoPlayer";

function About() {
  return (
    <>
      <Nav />
      <AboutHeader />
      <SlideShow />
      <VideoPlayer />
      <Footer />
    </>
  );
}

export default About;
