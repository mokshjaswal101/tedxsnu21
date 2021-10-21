import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//pages
import Home from "./pages/Home/Home";
import Qissa from "./pages/Qissa/Qissa";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/qissa" component={Qissa}></Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
