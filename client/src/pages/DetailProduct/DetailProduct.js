import React, { useEffect } from "react";
import { Row, Col, Button } from "antd";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";

const DetailProduct = (props) => {
  const { slug } = useParams();
  const data = useSelector((state) => state.products.product);
  const product = data.data;
  const options = product.product.options;
  console.log(product);
  console.log(options);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch, slug]);

  const handleClick = (item) => {
    scrollToTop();
    dispatch({
      type: "ADD_CART",
      item: item.product,
      price: item.product.default_spec.price,
    });
  };

  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return product ? (
    <Row style={{ marginBottom: "5vh" }}>
      <Col offset={1}>
        <Link to="/product">Tất cả sản phẩm</Link> {">"}{" "}
        <Link to={`/product/${slug}`}>{product.product.default_spec.name}</Link>
      </Col>
      <Col offset={1} span={23} style={{ borderBottom: "1px solid #ababab" }}>
        <h1>{product.product.default_spec.name}</h1>
      </Col>
      <Col span={12}>
        <img
          alt="aaa"
          src="https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png"
          width="100%"
        />
      </Col>
      {options.map((options, i) => (
        <Col offset={2} span={10}>
          <Row>
            <Col>
              <span style={{ fontWeight: "500", fontSize: "30px" }}>
                {(product.product.default_spec.price *
                  (100 - product.product.default_spec.discount)) /
                  100}{" "}
                VNĐ
              </span>
              <br></br>
              <span style={{ fontSize: "20px", fontWeight: "500" }}>
                Giá gốc:{" "}
              </span>
              <span
                style={{ textDecoration: "line-through", color: "#636363" }}
              >
                {product.product.default_spec.price}
              </span>
            </Col>
            <Col className={styles["menu-wrapper"]}>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>Màn hình:</Col>
                <Col span={12}>
                  {product.product.default_spec.display[0].more_info}
                </Col>
              </Row>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>CPU:</Col>
                <Col span={12}>{product.product.default_spec.processor}</Col>
              </Row>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>RAM:</Col>
                <Col span={12}>
                  {product.product.default_spec.memory[0].text}
                </Col>
              </Row>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>Ổ cứng:</Col>
                <Col span={12}>
                  {product.product.default_spec.storage[0].text}
                </Col>
              </Row>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>Hệ điều hành:</Col>
                <Col span={12}>
                  {product.product.default_spec.operating_system[0]}
                </Col>
              </Row>
              <Row
                style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}
              >
                <Col span={10}>Card đồ họa:</Col>
                <Col span={12}>{product.product.default_spec.graphic_card}</Col>
              </Row>
            </Col>

            <Col span={20} style={{ marginTop: "3vh" }}>
              <Link to="/shopcart">
                <Button
                  onClick={() => handleClick(product)}
                  type="primary"
                  style={{ height: "50px" }}
                >
                  Mua ngay
                </Button>
              </Link>
            </Col>
            <Col span={9} style={{ marginTop: "1vh" }}>
              <Button onClick={() => handleClick(product)}>
                Thêm vào giỏ hàng
              </Button>
            </Col>
            <Col offset={2} span={9} style={{ marginTop: "1vh" }}>
              <Button>Xem cấu hình chi tiết</Button>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  ) : (
    <div> khong co'</div>
  );
};
export default DetailProduct;
