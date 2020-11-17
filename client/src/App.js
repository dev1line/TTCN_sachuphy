import React from "react";
import Signin from "./components/Sign/Signin";
import Signup from "./components/Sign/Signup";
import About from "./page/about/about";
import Product from "./page/product";
import Home from "./page/home";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router className="main">
      {/* <Row className="main">
        <Col span={24}>
          <Header />
        </Col>
      </Row> */}
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
        <Route exact path="/about">
          <About />
        </Route>
        <Redirect to="/404" />
      </Switch>
      {/* <Row>
        <Col span={24} style={{ height: '52px' }}></Col>
        <Col span={24}><Footer /></Col>
      </Row> */}
    </Router>
  );
};

export default App;
