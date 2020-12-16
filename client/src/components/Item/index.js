import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const product = props.product;
  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Card
      hoverable
      style={{ width: "auto" }}
      cover={
        <img
          alt="example"
          src="https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png"
        />
      }
    >
      <div className="additional">
        <h3>{props.name}</h3>
        <p className="price">
          <span style={{ fontWeight: "500", fontSize: "20px" }}>
            {(props.price * (100 - props.discount)) / 100}
          </span>{" "}
          <span style={{ textDecoration: "line-through", color: "#636363" }}>
            {props.price}
          </span>
        </p>
        <p>{props.ram}</p>
        <Button
          onClick={() => props.onClick(product)}
          size="large"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            width: "100%",
          }}
        >
          Thêm vào giỏ hàng
        </Button>
        <Button
          size="large"
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            display: "block",
            width: "100%",
          }}
          onClick={scrollToTop}
        >
          <Link to={`/product/${props.slug}`}>Chi tiết sản phẩm</Link>
        </Button>
      </div>
    </Card>
  );
};
