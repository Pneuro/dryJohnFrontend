import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
import Nav from "../components/Nav";
import VideoPlayer from "../components/VideoPlayer";
import Story from "../components/Story";

function About() {
  return (
    <>
      <Nav />
      <AboutHeader />
      {/* <SlideShow /> */}
      <VideoPlayer />
      <Story />
      <Footer />
    </>
  );
}

export default About;
