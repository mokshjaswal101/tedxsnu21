import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "react-toastify/dist/ReactToastify.min.css";

//pages
import Home from "./pages/Home/Home";
import Qissa from "./pages/Qissa/Qissa";
import Tickets from "./pages/Tickets/Tickets";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/qissa" component={Qissa}></Route>
        <Route exact path="/tickets" component={Tickets}></Route>
      </Switch>
    </Router>
  );
}

export default App;
