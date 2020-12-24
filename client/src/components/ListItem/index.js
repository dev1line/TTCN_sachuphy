import React, { useEffect, useState } from "react";
import { Row, Col, Select, Pagination, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item";
import { LoadingOutlined } from "@ant-design/icons";

const { Option } = Select;

export const ListItem = (props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const data = useSelector((state) => state.products.products);
  // console.log(data);
  const numEachPage = 9;
  const [maxminPage, setMaxminPage] = useState([0, 9]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
  }, [dispatch]);

  const handleClick = (item) => {
    console.log("click item:", item.default_spec.price);
    dispatch({ type: "ADD_CART", item, price: item.default_spec.price });
  };

  const handleChangePage = (value) => {
    console.log("page:", value);
    maxminPage[0] = (value - 1) * numEachPage;
    maxminPage[1] = value * numEachPage;
    const new_data = [...maxminPage];
    setMaxminPage(new_data);
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
            Tim thay {data.length ? data.length : "0"} sản phẩm
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
            data.slice(maxminPage[0], maxminPage[1]).map((product, i) => (
              <Col key={i} span={8}>
                <Item
                  name={product.default_spec.name}
                  price={product.default_spec.price}
                  discount={product.default_spec.discount}
                  ram={product.default_spec.memory.capacity}
                  slug={product.default_spec.slug}
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
        <Pagination
          defaultCurrent={1}
          defaultPageSize= {numEachPage} //default size of page
          onChange={(value) => handleChangePage(value)}
          total={data.length < 9 ? 10 : Math.floor(data.length / numEachPage)*10} //total number of card data available
        />
      </Row>
    </div>
  );
};
