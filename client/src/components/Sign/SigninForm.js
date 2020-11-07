import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import "./SigninForm.css"
import { Link } from "react-router-dom";


const SigninForm = props => {

    const onFinish = values => {
       
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item >
                <h1 style={{ color: 'black', fontSize: '42px', margin: '-10px 0px' }}>Sign In</h1>
            </Form.Item>
            <Form.Item >
                <p style={{ color: 'black', margin: '0px' }}><Link to="/signup">Need an account ?</Link></p>
            </Form.Item>
            <Form.Item
                name="mail"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="pass"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>
            <Form.Item >
                <Button size="large" type="success" htmlType="submit" style={{ float: 'right', backgroundColor: "green", color: "white" }}>
                    Sign In
                </Button>
            </Form.Item>
            {/* {token !== '' ? <Redirect to="/" /> : <Redirect to="/signin" />} */}
        </Form>
    );
};
export default SigninForm;