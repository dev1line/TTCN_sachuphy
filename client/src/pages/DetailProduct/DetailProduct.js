import React, { useEffect, useState } from "react";
import "animate.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductParameter, Loading, Product } from "../../components";
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
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState({});
  const [options, setOptions] = useState([]);
  const [productsRandom, setProductsRandom] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch, slug]);
  const handleClick = (product) => {
    // scrollToTop();
    // console.log(product.price * (100 - product.discount) / 100)
    dispatch({
      type: "ADD_CART",
      item: product,
      price: product.default_spec.price * (100 - product.default_spec.discount) / 100,
    });
  };
  useEffect(() => {
    if (products.length === 0) return;
    for (var i = 0; i < 4; i++) {
      productsRandom.push(
        products.splice(Math.random() * (products.length - 1), 1).pop()
      );
    }
    setProductsRandom([])
    setProductsRandom(productsRandom)
  }, [productsRandom]);
  useEffect(() => {
    console.log("aaa", productsRandom);
  }, [productsRandom]);
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
    // console.log(currentProduct);
    setProduct(currentProduct);
  }, [productBySlug, slug]);

  useEffect(() => {
    // setProductsRandom([]);
    if (!productBySlug) return;
    // console.log(productBySlug.options);
    // console.log(productBySlug.default_spec);
    setOptions([productBySlug.default_spec, ...productBySlug.options]);
  }, [productBySlug, slug]);

  // function scrollToTop() {
  //   return window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }
  // useEffect(() => {
  //   console.log(options);
  // }, [options])
  // useEffect(() => {
  //   console.log(product);
  // }, [product])
  return (
    <div className="animate__animated animate__fadeIn">
      {product.name ? (
        <Row
          justify="center"
          style={{
            margin: "30px 0",
            width: "100%",
            borderBottom: "1px solid #ababab",
          }}>
          <Col>
            <ProductParameter
              slug={slug}
              name={
                productBySlug
                  ? productBySlug.default_spec &&
                    productBySlug.default_spec.name
                  : ""
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
          justify="center">
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
        }}>
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
      {productsRandom.length ? (
        <Row>
          <Col span={24}>
            <Row>
              <Col offset={1}>
                <h1>Các sản phẩm liên quan</h1>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[16, 16]} justify="center">
              {productsRandom.map((product, i) => (
                <Col
                  lg={{ span: 6 }}
                  xs={{ span: 18 }}
                  sm={{ span: 12 }}
                  key={i}>
                  <Product
                    name={product.default_spec.name}
                    price={product.default_spec.price}
                    discount={
                      product.options.length
                        ? (product.default_spec.discount = Math.max.apply(
                            Math,
                            product.options.map((option) =>
                              product.default_spec.discount > option.discount
                                ? product.default_spec.discount
                                : (product.default_spec.discount =
                                    option.discount)
                            )
                          ))
                        : product.default_spec.discount
                    }
                    ram={product.default_spec.memory.capacity}
                    slug={product.default_spec.slug}
                    product={product}
                    onClick={(name) => handleClick(name)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
};
export default DetailProduct;
