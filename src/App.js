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

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/conference" component={Conference}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
