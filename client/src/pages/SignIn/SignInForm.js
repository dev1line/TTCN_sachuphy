import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SignInForm.css";
import { Link, Redirect } from "react-router-dom";

const SigninForm = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  // console.log("token", token);
  // localStorage.setItem("token", token);
  const onFinish = (values) => {
    console.log("value:", values);
    dispatch({ type: "LOGIN", username: values.user, password: values.pass });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="container"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item>
        <h1 className="title">
          SIGN IN
        </h1>
      </Form.Item>
      <Form.Item>
        <p className="subtitle">
          <Link to="/signup">Need an account ?</Link>
        </p>
      </Form.Item>
      <Form.Item
        name="user"
        rules={[{ required: true, message: "Please input your username!" }]}>
        <Input
          className="input-group-item"
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="pass"
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password
          className="input-group-item"
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          size="large"
          type="success"
          htmlType="submit"
          className="btnsub"
          style={{ backgroundColor:' #1789fc', fontWeight:'bold', color:'#FFFFFF'}}
          >
          SIGN IN
        </Button>
      </Form.Item>
      {token !== "" ? <Redirect to="/" /> : <Redirect to="/signin" />}
    </Form>
  );
};
export default SigninForm;
