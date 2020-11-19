import React from "react";
import { Header, Footer } from "./components";
import Signin from "./page/Sign/Signin";
import Signup from "./page/Sign/Signup";
import Product from "./page/Product/Product";
import ShopCart from "./page/ShopCart/ShopCart"
// import About from "./page/About/About";
import Home from "./page/Home/home";
import "./App.module.css";
import { Col, Row } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Row>
        <Col span={24}>
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
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route exact path="/checkout">
              <ShopCart />
            </Route>
          </Switch>
          <Footer />
        </Col>
      </Row>
    </Router>
  );
};

export default App;
