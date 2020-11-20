import React from "react";
import { Row, Col, Form, Input, Button, Select } from "antd";
import TableItem from "../TableItem";
import "./style.css";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const data = [
  {
    key: 1,
    image:
      "https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png",
    name: "John Brown",
    price: 32,
    sl: 1,
    all: 32,
  },
  {
    key: 2,
    image:
      "https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png",
    name: "John Brown",
    price: 32,
    sl: 1,
    all: 32,
  },
  {
    key: 3,
    image:
      "https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png",
    name: "John Brown",
    price: 32,
    sl: 1,
    all: 32,
  },
  {
    key: 4,
    image:
      "https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png",
    name: "John Brown",
    price: 32,
    sl: 1,
    all: 32,
  },
];

const FormInfo = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue="+84"
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="1">+1</Option>
        <Option value="2">+2</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Row>
      <Col span={24}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          className="abc-form"
        >
          <h1 style={{ textAlign: "center" }}> Thông tin khách hàng</h1>
          <Form.Item
            name="name"
            label="Họ Tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Tên!",
              },
            ]}
          >
            <Input placeholder="Nguyễn Văn A" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Email!",
              },
              {
                type: "email",
                message: "Email không hợp lệ!",
              },
            ]}
          >
            <Input placeholder="iloveyou300@gmail.com" />
          </Form.Item>
          <Form.Item
            name="diachi"
            label="Địa Chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!",
              },
            ]}
          >
            <Input placeholder="Cho bố cái địa chỉ!?" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}
          >
            <Input
              placeholder="vd: 0123456789"
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item name="information" label="Chú thích thêm">
            <Input.TextArea placeholder="something" />
          </Form.Item>
          <TableItem data={data}></TableItem>
          <Button
            className="checkout"
            size="large"
            type="primary"
            htmlType="submit"
          >
            Đặt Hàng
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default FormInfo;
