import React from 'react';
import 'antd/dist/antd.css';
import Signin from "./components/Sign/Signin"
import Signup from "./components/Sign/Signup"
import Home from "./page/home"
import Product from "./page/product"
import About from "./page/about/about"
import "./App.css"
import Header from './components/Home/Header'
// import Footers from './components/Home/Footers'
import { Row, Col } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Row className="main">
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Switch>
        <Route exact path="/">
          <Row className="main">
            <Col span={24}>
              <Home></Home>
            </Col>
          </Row>
        </Route>
        <Route exact path="/product">
          <Row className="main">
            <Col span={24}>
              <Product></Product>
            </Col>
          </Row>
        </Route>
        <Route exact path="/signin">
          <Row className="main">
            <Col offset={6}></Col>
            <Col span={12}><Signin /></Col>
            <Col offset={6}></Col>
          </Row>
        </Route>
        <Route exact path="/signup">
          <Row className="main">
            <Col offset={6}></Col>
            <Col span={12}><Signup /></Col>
            <Col offset={6}></Col>
          </Row>
        </Route>
        <Route exact path="/about">
          <Row className="main">
            <Col span={24}><About /></Col>
          </Row>
        </Route>
      </Switch>
      {/* <Row>
        <Col span={24} style={{ height: '52px' }}></Col>
        <Col span={24}><Footer /></Col>
      </Row> */}
    </Router>
  );
}

export default App;
