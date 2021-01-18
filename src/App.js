import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
