import React from "react";
import { Header, Footer } from "./components";
import Signin from "./page/Sign/Signin";
import Signup from "./page/Sign/Signup";
import "./App.css";
import { Home, Product, About, Contact } from "./page";
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
            <Route exact path="/About">
              <div className="main">
                <About />
              </div>
            </Route>
            <Route exact path="/Contact">
              <div className="main">
                <About />
              </div>
            </Route>
          </Switch>
          <Footer />
        </Col>
      </Row>
    </Router>
  );
};

export default App;
