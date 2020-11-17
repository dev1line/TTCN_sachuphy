import React from "react";
import Header from "./components/Header/Header";
// import Footer from '../components/Footer/Footer';
import Signin from "./components/Sign/Signin";
import Signup from "./components/Sign/Signup";
import About from "./page/About/about";
import Product from "./page/Product/product";
import Home from "./page/Home/home";
import "./App.css";
import {Col, Row} from 'antd';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router className="main">
      <Row>
        <Col span={20} xs></Col>
        <Col style={{maxWidth:1440}}>
    
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
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      
      <Footer />

        </Col>
        <Col xs></Col>
      </Row>
      
    </Router>
  );
};

export default App;
