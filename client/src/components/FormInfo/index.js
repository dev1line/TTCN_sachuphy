import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Select, Modal, Table, Tag } from "antd";
import TableItem from "../TableItem";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { formatMoney } from "../../help/convert"
import { formatPrice } from "../../help/formatPrice";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const data = useSelector((state) => state.cart.cartList);
  const total = useSelector((state) => state.cart.total);
  const orders = useSelector((state) => state.order.orders);
  const options = ["+84", "+1", "+2"];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const onFinish = (values) => {
    let order = {
      name: values.name,
      address: values.diachi,
      phone_number: values.prefix ? values.prefix : "84" + values.phone,
    };
    if (!localStorage.getItem("token")) {
      let cartlist = Object.values(JSON.parse(localStorage.getItem("cart")));

      let products = [];
      if (cartlist.length) {
        for (let i = 0; i < cartlist.length; i++) {
          products.push({
            slug: cartlist[i].slug,
            quantity: cartlist[i].number,
          });
        }
        order = {
          ...order,
          cart: {
            products: products,
          },
        };
      }
    }
    dispatch({
      type: "CHECK_OUT",
      action: { order },
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue={options[0]}
        style={{
          width: 70,
        }}>
        {options.map((e, index) => {
          return (
            <Option key={index} value={e}>
              {e}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: 100,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: 100,
      key: "address",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      key: "phone_number",
      width: 15,
    },
    {
      title: "Sản Phẩm",
      key: "products",
      dataIndex: "products",
      width: 200,
      render: (products, row) => (
        <span>
          {products.map((product, index) => {
            let color = product.length > 5 ? "geekblue" : "green";
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
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      width: 10,
      render: (text) => <p>{formatPrice(text)} VNĐ</p>,
    },
  ];

  const dataOrder = [];
  let listOrders = Object.values(orders);
  if (listOrders) {
    listOrders.map((el) => {
      let products = [];
      let slugs = [];
      let total = 0;
      el.products.map((product) => {
        total += parseInt(product.quantity) * parseInt(product.price);
        slugs.push(product.slug);
        let str = product.quantity + " sản phẩm: " + product.detail.name;
        products.push(str);
      });
      //
      let order = {
        name: el.name,
        address: el.address,
        phone_number: el.phone_number,
        products,
        total,
        slugs,
      };
      dataOrder.push(order);
      return null;
    });
  }

  return (
    <Row>
      <Col span={24}>
        <Button
          type="primary"
          className="getorder"
          size="large"
          onClick={showModal}>
          Danh sách đơn hàng của bạn
        </Button>
        <Modal
          title="Danh sách order"
          width={1000}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Table columns={columns} dataSource={dataOrder} scroll={{ x: 500 }} />
        </Modal>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          className="abc-form">
          <TableItem data={data} total={total}></TableItem>

          <h1 style={{ textAlign: "center", textDecoration: "uppercase" }}>
            {" "}
            Thông tin khách hàng
          </h1>
          <Form.Item
            name="name"
            label="Họ Tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Tên!",
              },
            ]}>
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
            ]}>
            <Input placeholder="example@gmail.com" />
          </Form.Item>
          <Form.Item
            name="diachi"
            label="Địa Chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng điền địa chỉ!",
              },
            ]}>
            <Input placeholder="54 Nguyễn Lương Bằng Tp. Đà Nẵng" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!",
              },
            ]}>
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
          <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
            <Button
              className="checkout"
              size="large"
              type="primary"
              htmlType="submit"
              style={{ width: "40%" }}
              onClick={() => scrollToTop()}>
              Đặt Hàng
            </Button>
          </div>
        </Form>
      </Col>4
    </Row>
  );
};

export default FormInfo;
