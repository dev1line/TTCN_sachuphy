import React from "react";
import { Header, Footer } from "./components";
import Signin from "./page/Sign/Signin";
import Signup from "./page/Sign/Signup";
import { Home, Product, About } from "./page";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopCart from './page/ShopCart/ShopCart'
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/shopcart">
          <ShopCart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
