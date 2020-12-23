import React, { useEffect, useState } from "react";
import { Row, Col, Select, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../Item";
import { Loading } from "..";

const { Option } = Select;

const ListProducts = (props) => {
  const data = useSelector((state) => state.products.currentProduct);
  const numEachPage = 9;
  const [maxminPage, setMaxminPage] = useState([0, 8]);
  const dispatch = useDispatch();
  const handleChangeProducts = (value) => {
    dispatch({ type: "SORT_PRODUCTS", sortProducts: value });
  };
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
  }, [dispatch]);

  const handleClick = (item) => {
    console.log(item);
    dispatch({
      type: "ADD_CART",
      item: item.default_spec,
      price: item.default_spec.price,
    });
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
            Tim thấy {data.length ? data.length : "0"} sản phẩm
          </p>
          <Select
            size="large"
            defaultValue="Name"
            onChange={handleChangeProducts}
            style={{ width: 200, float: "right" }}
          >
            <Option value="Name">Sắp xếp theo tên</Option>
            <Option value="Price">Sắp xếp theo giá</Option>
          </Select>
        </Row>
        <Row style={{ margin: "30px 0", width: "100%" }}>
          {data.length ? (
            data.slice(maxminPage[0], maxminPage[1]).map((product, i) => (
              <Col key={i} lg={{ span: 8 }} xs={{ span: 24 }} sm={{span: 12}} >
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
            <Row justify="center" style={{ margin: "0", width: "100%" }}>
              <Col>
                <Loading />
              </Col>
            </Row>
          )}
        </Row>
      </Row>
      <Row justify="center">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage} //default size of page
          onChange={(value) => handleChangePage(value)}
          total={data.length < 9 ? 1 : Math.round(data.length / numEachPage)} //total number of card data available
        />
      </Row>
    </div>
  );
};
export default ListProducts