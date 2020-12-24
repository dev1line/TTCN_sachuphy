import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SignInForm.css";
import { Link, Redirect } from "react-router-dom";

const SigninForm = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [click, setClick] = useState(false);
  console.log("token", token);
  useEffect(() => {
    if (token === "" && click) {
      form.resetFields();
      setClick(false);
      setVisiable(true);
    }
  }, [token, form, click]);
  const [visiable, setVisiable] = useState(false);
  const onFinish = (values) => {
    console.log("value:", values);
    dispatch({ type: "LOGIN", username: values.user, password: values.pass });
    console.log("token in on finish", token);
    setClick(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleOk = (e) => {
    console.log(e);
    setVisiable(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisiable(false);
  };
  return (
    <Form
      form={form}
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
      {token !== "" ? <Redirect to="/" />: 
      <Modal
        title="Notification"
        visible={visiable}
        onOk={handleOk}
        onCancel={handleCancel}>
         {token !== "" ? <p>Successfully</p> :  <p>Login Fail ....Please login again !</p>}
      </Modal>
    }
    </Form>
  );
};
export default SigninForm;
