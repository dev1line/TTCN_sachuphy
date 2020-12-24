import React, { useState, useEffect } from "react";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import { setToken } from "../../action/tokenAction";
import { useSelector, useDispatch } from "react-redux";
const SignupForm = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.token.signup_success);
  const [visiable, setVisiable] = useState(false);
  useEffect(() => {
    if (success) {
      form.resetFields();
    }
  }, [success, form]);
  const onFinish = (values) => {
    console.log("finish", values);
    dispatch(setToken(values.txtusername, values.txtpassword, values.confirm));
    showModal();
  };
  const showModal = () => {
    setVisiable(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisiable(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisiable(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="container"
      form={form}
      name="basis"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <h1 className="title">
        ĐĂNG KÝ
        </h1>
      </Form.Item>
      <Form.Item>      
          <p className='subtitle'>
            <Link to="/signin">Đã có tài khoản</Link>
          </p>
        <Modal
          title="Notification"
          visible={visiable}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {success ? <p>Successfull</p> : <p>Fail</p>}
        </Modal>
      </Form.Item>
      <Form.Item
        name="txtusername"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          className="input-group-item"
          size="large"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="txtpassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          className="input-group-item"
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["txtpassword"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("txtpassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password
          className="input-group-item"
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          size="large"
          type="success"
          htmlType="submit"
          className="btnsub"
          style={{
            backgroundColor: " #1789fc",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          SIGN UP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
