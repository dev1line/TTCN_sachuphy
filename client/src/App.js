import React from "react";
import "./App.css";
import { Header, Footer } from "./components";
import {
  Home,
  Product,
  About,
  Contact,
  Shopcart,
  SignUp,
  SignIn,
} from "./view";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <SignIn />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="main">
            <SignUp />
          </div>
        </Route>
        <Route exact path="/About">
          <div className="main">
            <About />
          </div>
        </Route>
        <Route exact path="/Contact">
          <div className="main">
            <Contact />
          </div>
        </Route>
        <Route exact path="/Shopcart">
          <div className="main">
            <Shopcart />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
