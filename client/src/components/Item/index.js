import React from "react";
import { Card, Button } from "antd";

export const Item = (props) => {
  const product = props.product;
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
        <p className="price">{props.price}</p>
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
      </div>
    </Card>
  );
};
