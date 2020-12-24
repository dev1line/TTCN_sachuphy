import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductParameter, Loading } from "../../components";
// import styles from "./styles.module.css";

const DetailProduct = (props) => {
  const { slug } = useParams();
  const product = useSelector((state) => state.products.default_product);
  const options = useSelector((state) => state.products.options);
  console.log(product.length);
  // console.log(options);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch, slug]);
  const handleClick = (product) => {
    scrollToTop();
    console.log(product.price * (100 - product.discount) / 100)
    dispatch({
      type: "ADD_CART",
      item: product,
      price: product.price * (100 - product.discount) / 100,
    });
  };

  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return product.length !== 0 ? (
    <ProductParameter
      slug={slug}
      name={product.name}
      price={product.price}
      discount={product.discount}
      display={product.display}
      processor={product.processor}
      memory={product.memory}
      storage={product.storage}
      operating_system={product.operating_system}
      graphic_card={product.graphic_card}
      click={(product) => handleClick(product)}
      product={product}
      options={options}
    />
  ) : (
    <Loading />
  );
};
export default DetailProduct;
