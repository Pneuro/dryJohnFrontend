import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Testimonials";
import Scene from "./components/Scene";
import News from "./components/News";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  // api to Dry John backend.
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);

  
  

  return (
    <div style={styles.container} className="App">
      <Router>
        <Route path="/" exact>
          <Nav />
          <Header email={email} setEmail={setEmail} />
          <Scene />
          <News />
          <About />
          <Reviews reviews={reviews} setReviews={setReviews} />
          <Contact />
          <Footer />
        </Route>
        <Route path="/about">
          <Nav />
        </Route>
        <Route path="/products">
          <Nav />
        </Route>
        <Route path="/contact">
          <Nav />

        </Route>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "#dbf0ff",
  },
};
