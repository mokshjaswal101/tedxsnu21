import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Conference from "./pages/Conference/Conference";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/conference" component={Conference}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/faq" component={FAQ}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
