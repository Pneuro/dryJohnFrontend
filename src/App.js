import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Scene from "./components/Scene";
import News from "./components/News";
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
          <Reviews reviews={reviews} setReviews={setReviews} />
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
