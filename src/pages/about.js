import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
import Nav from "../components/Nav";
import VideoPlayer from "../components/VideoPlayer";
import Story from "../components/Story";

function about() {
  return (
    <>
      <Nav />

      <AboutHeader />
      <Story />

      <VideoPlayer />
      <Footer />
    </>
  );
}

export default about;
