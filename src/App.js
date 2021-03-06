import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Testimonials";
import Scene from "./components/Scene";
import News from "./components/News";
import AboutPage from "./pages/AboutPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import OrderNow from "./components/OrderNow";
import BackendPage from "./pages/BackendPage";
import ProductPage from "./pages/ProductPage";

function App() {
  // api to Dry John backend.
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState("Pete");
  const baseUrl = "https://dry-john-backend.herokuapp.com";
  const logout = (e) => {
    setLoggedIn(false);
    setUser("");
  };
  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      console.log(window.innerWidth);
      setMobile(true);

      console.log(`Set mobile? ${mobile}`);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <div style={styles.container} className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nav mobile={mobile} navOpen={navOpen} setNavOpen={setNavOpen} />
            <Header email={email} setEmail={setEmail} baseUrl={baseUrl} />
            <Scene />
            <News baseUrl={baseUrl} />
            <About />
            <Reviews reviews={reviews} setReviews={setReviews} />
            <Footer />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          {/* Administration */}
          {/* Auth Provider */}
          <Route path="/admin/login">
            <Nav mobile={mobile} navOpen={navOpen} setNavOpen={setNavOpen} />
            {!loggedIn ? (
              <Login loggedIn setLoggedIn={setLoggedIn} />
            ) : (
              <BackendPage user={user} logout={logout} baseUrl={baseUrl} />
            )}
          </Route>
        </Switch>
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
