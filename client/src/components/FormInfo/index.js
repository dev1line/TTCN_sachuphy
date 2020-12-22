import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Select, Modal, Table, Tag } from "antd";
import TableItem from "../TableItem";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatMoney } from "../../help/convert"

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const FormInfo = (props) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false)
  const data = useSelector((state) => state.cart.cartList);
  const total = useSelector(state => state.cart.total);
  const orders = useSelector(state => state.order.orders);
  console.log("data first:", data);
  console.log(orders)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const onFinish = (values) => {
    let order = {
        name: values.name,
        address: values.diachi,
        phone_number: values.prefix?values.prefix:"84" + values.phone,
    }
    if(!localStorage.getItem("token")) {
      let cartlist = Object.values(JSON.parse(localStorage.getItem("cart")));
      console.log(cartlist.length)
      let products = []
      if(cartlist.length) {
        for( let i = 0; i< cartlist.length; i++) {
          products.push({
            slug: cartlist[i].slug,
            quantity: cartlist[i].number
          })
        }
        order = {
          ...order,
          "cart": 
          {
            "products": products
          }
        }
      }

    }
    console.log({order})
    dispatch({
      type: "CHECK_OUT",
      action: {order}
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue = "84"
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


  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      render: text => <a>{text}</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      width: 100,
      key: 'address',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: 15,
    },
    {
      title: 'Sản Phẩm',
      key: 'products',
      dataIndex: 'products',
      width: 200,
      render: (products, row) => (
        <span>
          {products.map((product, index )=> {
            let color = product.length > 5 ? 'geekblue' : 'green';
            return (
              <Link to={`/product/${row.slugs[index]}`}>
                <Tag className="tag" color={color} key={product}>
                  {product}
                </Tag>
              </Link>
              
            );
          })}
        </span>
      ),
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      width: 10,
      render: text => <p>{formatMoney(text)} VNĐ</p>,
    },
  ];

  const dataOrder = [];
  let listOrders = Object.values(orders)
  console.log(listOrders)
  if(listOrders) {
    listOrders.map(el => {
      let products = [];
      let slugs = [];
      let total = 0;
      el.products.map(product =>{
        total += parseInt(product.quantity) * parseInt(product.price);
        slugs.push(product.slug)
        let str = product.quantity + " sản phẩm: "+product.detail.name;
        products.push(str);
      })
      // console.log(el)
      let order = {
        name: el.name,
        address: el.address,
        phone_number: el.phone_number,
        products,
        total,
        slugs,
      }
      dataOrder.push(order)
      return null
    })
  }
  console.log(dataOrder)
  
  
  return (
    <Row>
      <Col span = {24}>
      <Button type="primary" className="getorder" size="large" onClick={showModal}>
        Danh sách order của bạn
      </Button>
      <Modal title="Basic Modal" width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Table columns={columns} dataSource={dataOrder} scroll={{ x: 500 }}/>
      </Modal>
      </Col>
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
          <TableItem data={data} total={total}></TableItem>
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
