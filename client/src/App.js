import React from 'react';
import 'antd/dist/antd.css';
import Signin from "./components/Sign/Signin"
import Signup from "./components/Sign/Signup"
// import Headers from './components/Home/Headers'
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
      {/* <Row>
        <Col span={24}>
          <Headers />
        </Col>
      </Row> */}
      <Switch>
        <Route exact path="/signin">
          <Row>
            <Col offset={6}></Col>
            <Col span={12}><Signin /></Col>
            <Col offset={6}></Col>
          </Row>
        </Route>
        <Route exact path="/signup">
          <Row>
            <Col offset={6}></Col>
            <Col span={12}><Signup /></Col>
            <Col offset={6}></Col>
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
