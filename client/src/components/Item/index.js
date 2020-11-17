import React from "react";
import { Card, Button } from "antd";

export const Item = (props) => {
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
        <h3>Lap top MSI lenovo abc xyz</h3>
        <p className="price">Price: 20$</p>
        <p>Ram: 8gb</p>
        <Button
          size="large"
          style={{ marginRight: "auto", marginLeft: "auto", display: "block" }}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </Card>
  );
};
