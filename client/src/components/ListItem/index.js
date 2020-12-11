import React, { useEffect } from "react";
import { Row, Col, Select, Pagination, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

export const ListItem = (props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const data = useSelector((state) => state.products.filterProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT" });
  }, []);

  const handleClick = (item) => {
    console.log("click item:", item);
    dispatch({ type: "ADD_CART", item });
  };
  return (
    <div>
      <Row>
        <Col span={24}>
          <img
            alt="img"
            style={{ width: "100%", height: "250px" }}
            src="https://previews.123rf.com/images/alhovik/alhovik1708/alhovik170800009/84049519-weekend-sale-banner-this-weekend-special-offer-banner-template.jpg"
          />
        </Col>
      </Row>
      <Row>
        <Row style={{ marginTop: "30px", width: "100%", display: "block" }}>
          <p style={{ float: "left", fontSize: "18px", paddingTop: "5px" }}>
            Tim thay {data.length} sản phẩm
          </p>
          <Select
            size="large"
            defaultValue="ten"
            style={{ width: 200, float: "right" }}>
            <Option value="ten">Sắp xếp theo tên</Option>
            <Option value="gia">Sắp xếp theo giá</Option>
          </Select>
        </Row>
        <Row gutter={[32, 32]} style={{ marginTop: "30px" }}>
          {data.length ? (
            data.map((product, i) => (
              <Col key={i} span={8}>
                <Item
                  name={product.default_spec.name}
                  price={product.default_spec.price}
                  ram={product.default_spec.memory.capacity}
                  product={product}
                  onClick={(name) => handleClick(name)}
                />
              </Col>
            ))
          ) : (
            <Col>
              <Spin indicator={antIcon} />
            </Col>
          )}
        </Row>
      </Row>
      <Row justify="center">
        <Pagination defaultCurrent={1} total={50} />
      </Row>
    </div>
  );
};
