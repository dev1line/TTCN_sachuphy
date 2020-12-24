import React, { useEffect, useState } from "react";
import { Row, Col, Select, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../components";
import { Loading } from "..";
import queryString from "query-string"

const { Option } = Select;

const ListProducts = (props) => {
  const params = queryString.parse(window.location.search)
  var key = params.q;
  const data_product = useSelector((state) => state.products.currentProduct);
  const numEachPage = 9;
  const [maxminPage, setMaxminPage] = useState([0, 9]);

  const dispatch = useDispatch();
  const handleChangeProducts = (value) => {
    dispatch({ type: "SORT_PRODUCTS", sortProducts: value });
  };
  let data = []
  
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
  // useEffect(() => {
  //   
  // }, [data])
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
  }, [dispatch]);

  const handleClick = (item) => {
    
    dispatch({
      type: "ADD_CART",
      item: item.default_spec,
      price: item.default_spec.price,
    });
  };

  const handleChangePage = (value) => {
    
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
            defaultValue="Name"
            onChange={handleChangeProducts}
            style={{ width: 200, float: "right" }}
          >
            <Option value="Name">Sắp xếp theo tên</Option>
            <Option value="Price">Sắp xếp theo giá</Option>
          </Select>
        </Row>
        <Row style={{ margin: "30px 0", width: "100%" }} gutter={[16, 16]}>
          {data.length ? (
            data.slice(maxminPage[0], maxminPage[1]).map((product, i) => (
              <Col key={i} lg={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 12 }}>
                <Product
                  name={product.default_spec.name}
                  price={product.default_spec.price}
                  discount={product.options.length ? product.default_spec.discount =  Math.max.apply(Math,product.options.map((option) => (
                    (product.default_spec.discount > option.discount) ? product.default_spec.discount : product.default_spec.discount = option.discount
                  ))) : product.default_spec.discount}
                  ram={product.default_spec.memory.capacity}
                  slug={product.default_spec.slug}
                  img={product.default_spec.images}
                  options={product.options}
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
        <Col>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={numEachPage} //default size of page
            onChange={(value) => handleChangePage(value)}
            total={data.length < 9 ? 1 : Math.floor(data.length / numEachPage*9)} //total number of card data available
          />
        </Col>
      </Row>
    </div>
  );
};
export default ListProducts;
