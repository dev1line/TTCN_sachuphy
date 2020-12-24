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
import { Row, Col } from "antd";
const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Row>
            <Col span={24}>
              <div className="main">
                <Home />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/product">
          <Row>
            <Col span={24}>
              <div className="main">
                <Product />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/signin">
          <Row>
            <Col span={24}>
              <div className="main">
                <SignIn />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/signup">
          <Row>
            <Col span={24}>
              <div className="main">
                <SignUp />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/about">
          <Row>
            <Col span={24}>
              <div className="main">
                <About />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/contact">
          <Row>
            <Col span={24}>
              <div className="main">
                <Contact />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/shopcart">
          <Row>
            <Col span={24}>
              <div className="main">
                <Shopcart />
              </div>
            </Col>
          </Row>
        </Route>
        <Route exact path="/product/:slug">
          <Row>
            <Col span={24}>
              <div className="main">
                <DetailProduct />
              </div>
            </Col>
          </Row>
        </Route>
        <Route>
          <Row>
            <Col span={24}>
              <div className="main">
                <NotFound />
              </div>
            </Col>
          </Row>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
