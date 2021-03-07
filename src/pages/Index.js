import Nav from "../components/Nav";
import Header from "../components/Header";
import Scene from "../components/Scene";
import News from "../components/News";
import AboutSection from "../components/AboutSection";
import Reviews from "../components/Testimonials";
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
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

export default Index;
