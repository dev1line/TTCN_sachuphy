import React, { useEffect } from "react";
import { Row, Col, Select, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item";

const { Option } = Select;

export const ListItem = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT" });
  }, [dispatch]);

  return (
    <div>
      <Row>
        <div>
          <Col span={24}>
            <img
              alt="img"
              style={{ width: "100%", height: "250px" }}
              src="https://previews.123rf.com/images/alhovik/alhovik1708/alhovik170800009/84049519-weekend-sale-banner-this-weekend-special-offer-banner-template.jpg"
            />
          </Col>
        </div>
      </Row>
      <Row>
        <Row style={{ marginTop: "30px", width: "100%", display: "block" }}>
          <p style={{ float: "left", fontSize: "18px", paddingTop: "5px" }}>
            Có 20 sản phẩm
          </p>
          <Select
            size="large"
            defaultValue="ten"
            style={{ width: 200, float: "right" }}>
            <Option value="ten">Sắp xếp theo tên</Option>
            <Option value="gia">Sắp xếp theo giá</Option>
          </Select>
        </Row>
        <Row span={24} style={{ marginTop: "30px" }}>
          <Row gutter={[32, 32]}>
            {products.map((product, i) => (
              <Col key={i} className="gutter-row" span={8}>
                <Item
                  name={product.default_spec.name}
                  price={product.default_spec.price}
                  ram={product.default_spec.memory.capacity}></Item>
              </Col>
            ))}
          </Row>
        </Row>
        <Row
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}>
          <Pagination defaultCurrent={1} total={50} />
        </Row>
      </Row>
    </div>
  );
};
