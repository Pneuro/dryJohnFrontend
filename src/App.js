import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Testimonials";
import Scene from "./components/Scene";
import News from "./components/News";
import About from "./components/AboutPage";

import Footer from "./components/Footer";
import Login from "./pages/Login";
import OrderNow from "./components/OrderNow";
import Images from "./components/Images";

function App() {
  // api to Dry John backend.
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
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
          <Images />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Nav />
        </Route>

        {/* Administration */}
        {/* Auth Provider */}
        <Route path="/admin/login">
          {!loggedIn ? <Login loggedIn setLoggedIn={setLoggedIn} /> : ""}
        </Route>
        <Route path="/order">
          <OrderNow />
        </Route>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "#8dc84a",
  },
};
