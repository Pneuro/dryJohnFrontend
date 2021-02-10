import { useState, useEffect } from "react";
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

  const header = {
    "content-type": "applicaton/json",
  };
  useEffect(() => {
    fetch("/email", header);
  }, []);

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
