import React from 'react';
import { Row, Col } from "antd"
import SignupForm from "./SignupForm"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     NavLink
// } from "react-router-dom";
const Signup = (props) => {
    return (
        <Row>
            <Col offset={4}></Col>
            <Col span={16}><SignupForm /></Col>
            <Col offset={4}></Col>
        </Row>

    );
}

export default Signup;