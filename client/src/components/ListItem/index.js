import React, { useEffect, useState } from "react";
import { Row, Col, Select, Pagination, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item";
import { LoadingOutlined } from "@ant-design/icons";
import queryString from "query-string";

const { Option } = Select;

export const ListItem = (props) => {
  const params = queryString.parse(window.location.search)
  var key = params.q;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const data_product = useSelector((state) => state.products.products);
  let data = []
  console.log(key)
  if(key) {
    key = decodeURI(key).toLowerCase();
    Object.values(data_product).map((el, index) => {
      if(el.default_spec.name.toLowerCase().search(key) >= 0) {
        data.push(el)
      }
      return null;
    })
  }
  else data = data_product
  console.log(data)
  const numEachPage = 9;
  const [maxminPage, setMaxminPage] = useState([0, 9]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
  }, [dispatch]);

  const handleClick = (item) => {
    console.log("click item:", item.default_spec.price);
    dispatch({ type: "ADD_CART", item, price: item.default_spec.price * (100 - item.default_spec.discount) / 100});
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
            Tìm thấy {data.length ? data.length : "0"} sản phẩm {`${key?"cho từ khoá " + "\""+key+"\"":""}`}
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
          total={data.length < 9 ? 9 : Math.floor(data.length / numEachPage)*10} //total number of card data available
        />
      </Row>
    </div>
  );
};
