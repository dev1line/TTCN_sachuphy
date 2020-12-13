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
  DetailProduct,
  NotFound,
} from "./pages";
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
        <Route exact path="/shopcart">
          <div className="main">
            <Shopcart />
          </div>
        </Route>
        <Route exact path="/product/:slug">
          <div className="main">
            <DetailProduct />
          </div>
        </Route>
        <Route>
          <div className="main">
            <NotFound />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
