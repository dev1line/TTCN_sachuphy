import React from "react";
import { Row, Col } from "antd";
import SigninForm from "./SignInForm";

const Signin = (props) => {
  return (
    <Row>
      <Col offset={4}></Col>
      <Col span={16} style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
        <SigninForm />
      </Col>
      <Col offset={4}></Col>
    </Row>
  );
};

export default Signin;
