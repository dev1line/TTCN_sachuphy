import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const ProductParameter = (props) => {
  return (
    <Row style={{ marginBottom: "5vh" }}>
      <Col offset={1}>
        <Link to="/product">Tất cả sản phẩm</Link> {">"}{" "}
        <Link to={`/product/${props.slug}`}>{props.name}</Link>
      </Col>
      <Col offset={1} span={23} style={{ borderBottom: "1px solid #ababab" }}>
        <h1>{props.name}</h1>
      </Col>
      <Col span={12}>
        <img
          alt="product"
          src="https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png"
          width="100%"
        />
      </Col>
      <Col offset={2} span={8}>
        <Row style={{ margin: "2vh 0 1vh" }}>
          {props.options.map((option, i) => (
            <Col span={7} offset={1} key={i}>
              <Button
                style={{ height: "5vh", borderRadius: "10px" }}
                onClick={() => props.changeOption()}
                >
                {option.name}
              </Button>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <span style={{ fontWeight: "500", fontSize: "30px" }}>
              {(props.price * (100 - props.discount)) / 100} VNĐ
            </span>
            <br></br>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Giá gốc:{" "}
            </span>
            <span style={{ textDecoration: "line-through", color: "#636363" }}>
              {props.price}
            </span>
          </Col>
          <Col>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Màn hình:</Col>
              <Col span={14}>{props.display[0].more_info}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>CPU:</Col>
              <Col span={14}>{props.processor}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>RAM:</Col>
              <Col span={14}>{props.memory[0].text}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Ổ cứng:</Col>
              <Col span={14}>{props.storage[0].text}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Hệ điều hành:</Col>
              <Col span={14}>{props.operating_system[0]}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Card đồ họa:</Col>
              <Col span={14}>{props.graphic_card}</Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: "3vh" }}>
            <Link to="/shopcart">
              <Button
                onClick={() => props.click(props.product)}
                type="primary"
                style={{ height: "50px" }}>
                Mua ngay
              </Button>
            </Link>
          </Col>
          <Col span={11} style={{ marginTop: "1vh" }}>
            <Button onClick={() => props.click(props.product)}>
              Thêm vào giỏ hàng
            </Button>
          </Col>
          <Col offset={2} span={11} style={{ marginTop: "1vh" }}>
            <Button>Xem cấu hình chi tiết</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductParameter;
