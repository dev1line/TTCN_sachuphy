import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductParameter, Loading } from "../../components";
// import styles from "./styles.module.css";

const DetailProduct = (props) => {
  const { slug } = useParams();
  const product = useSelector((state) => state.products.product);
  const options = product ? product.options : null;
  // console.log(product.length);
  // console.log(options);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT_BY_SLUG", slug: slug });
  }, [dispatch]);
  const handleClick = (product) => {
    scrollToTop();
    dispatch({
      type: "ADD_CART",
      item: product,
      price: product.default_spec.price,
    });
  };

  const changeOption = (option) => {
    scrollToTop();
    dispatch({ type: "CHANGE_OPTION", option: option });
    console.log(product);
  };

  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return product.length != 0 ? (
    <ProductParameter
      slug={slug}
      name={product.default_spec.name}
      price={product.default_spec.price}
      discount={product.default_spec.discount}
      display={product.default_spec.display}
      processor={product.default_spec.processor}
      memory={product.default_spec.memory}
      storage={product.default_spec.storage}
      operating_system={product.default_spec.operating_system}
      graphic_card={product.default_spec.graphic_card}
      click={(product) => handleClick(product)}
      changeOption={(option) => changeOption(option)}
      product={product}
      options={options}
    />
  ) : (
    <Loading />
  );
};
export default DetailProduct;
