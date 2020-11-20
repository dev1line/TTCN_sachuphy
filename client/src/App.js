import React from "react";
import 'animate.css';
import { Header, Footer } from "./components";
import Signin from "./page/Sign/Signin";
import Signup from "./page/Sign/Signup";
import { Home, Product, About, Contact } from "./page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Home />
          </div>
        </Route>
        <Route exact path="/product">
          <div className="main">
            <Product />
          </div>
        </Route>
        <Route exact path="/signin">
          <div className="main">
            <Signin />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="main">
            <Signup />
          </div>
        </Route>
        <Route exact path="/about">
          <div className="main">
            <About />
          </div>
        </Route>
        <Route exact path="/contact">
          <div className="main">
            <Contact />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
