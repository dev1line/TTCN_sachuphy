import React, { useEffect, useState } from "react";
import "animate.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductParameter, Loading } from "../../components";
import { pickBy } from "lodash";
import { Row, Col } from "antd";
// import styles from "./styles.module.css";

const DetailProduct = (props) => {
  const { slug } = useParams();
  const productBySlug = useSelector((state) =>
    state.products.products.find(
      (element) =>
        element.default_spec.slug === slug ||
        element.options.some((option) => option.slug === slug)
    )
  );
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch, slug]);
  const handleClick = (product) => {
    console.log(product);
    scrollToTop();
    dispatch({
      type: "ADD_CART",
      item: product,
      price: product.default_spec.price,
    });
  };

  useEffect(() => {
    if (!productBySlug) return;
    function getCurrentProductBySlug() {
      const defaultSpecProduct = productBySlug.default_spec;
      if (defaultSpecProduct.slug === slug) {
        return defaultSpecProduct;
      }
      const optionProduct = productBySlug.options.find(
        (option) => option.slug === slug
      );
      const sanitisedOptionProduct = pickBy(
        optionProduct,
        (property) =>
          property === 0 ||
          (Array.isArray(property) && property.length) ||
          (!Array.isArray(property) && property)
      );
      return { ...defaultSpecProduct, ...sanitisedOptionProduct };
    }
    const currentProduct = getCurrentProductBySlug();
    console.log(currentProduct);
    setProduct(currentProduct);
  }, [productBySlug, slug]);

  useEffect(() => {
    if (!productBySlug) return;
    setOptions([productBySlug.default_spec, ...productBySlug.options]);
  }, [productBySlug, slug]);

  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="animate__animated animate__fadeIn">
      {product.name ? (
        <Row
          justify="center"
          style={{
            margin: "30px 0",
            width: "100%",
            borderBottom: "1px solid #ababab",
          }}
        >
          <Col>
            <ProductParameter
              slug={slug}
              name={
                productBySlug.default_spec && productBySlug.default_spec.name
              }
              price={product.price}
              discount={product.discount}
              display={product.display}
              processor={product.processor}
              memory={product.memory}
              storage={product.storage}
              operating_system={product.operating_system}
              graphic_card={product.graphic_card}
              color={product.color}
              click={(product) => handleClick(product)}
              product={productBySlug}
              options={options}
            />
          </Col>
        </Row>
      ) : (
        <Row
          style={{
            margin: "30px 0",
            width: "100%",
            borderBottom: "1px solid #ababab",
          }}
        >
          <Col>
            <Loading />
          </Col>
        </Row>
      )}
      <Row
        style={{
          paddingBottom: "30px",
          width: "100%",
          borderBottom: "1px solid #ababab",
        }}
      >
        <Col span={24}>
          <Row>
            <Col offset={1}>
              <h1>Mô tả sản phẩm</h1>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col offset={1} style={{ fontSize: "20px", fontWeight: "500" }}>
              {product.description}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Col offset={1}>
              <h1>Cac san pham</h1>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default DetailProduct;
