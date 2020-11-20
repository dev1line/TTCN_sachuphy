import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import LeftContent from "../../components/LeftContent";
import { RightContent, ListItem } from "../../components/RightContent";

const Product = (props) => {
  const [shouldAnchor, setShouldAnchor] = useState(null);
  const [shouldAnchorBottom, setShouldAnchorBottom] = useState(null);
  const [leftContentWidth, setLeftContentWidth] = useState(0);
  // const [leftContent, setLeftContentHeight] = useState(0);
  const LeftContentDOM = React.createRef();

  useEffect(() => {
    const productDOM = document.getElementById("product");
    console.log(productDOM.offsetTop + productDOM.clientHeight);
    function handleAnchor() {
      if (
        window.scrollY >= document.getElementById("product").offsetTop &&
        !shouldAnchor
      ) {
        if (!LeftContentDOM.current) return;
        setLeftContentWidth(LeftContentDOM.current.clientWidth);
        return setShouldAnchor(true);
      } else if (
        window.scrollY < document.getElementById("product").offsetTop &&
        shouldAnchor
      ) {
        setLeftContentWidth(0);
        return setShouldAnchor(false);
      }
    }
    window.addEventListener("scroll", handleAnchor);
    return function cleanup() {
      window.removeEventListener("scroll", handleAnchor);
    };
  });

  useEffect(() => {
    function handleAnchorBottom() {
      if (!LeftContentDOM.current) return;
      if (
        window.scrollY + LeftContentDOM.current.offsetHeight >
          document.getElementById("product").offsetTop +
            document.getElementById("product").offsetHeight &&
        !shouldAnchorBottom
      ) {
        setShouldAnchor(false);
        setShouldAnchorBottom(true);
      } else if (
        window.scrollY + LeftContentDOM.current.offsetHeight <
          document.getElementById("product").offsetTop +
            document.getElementById("product").offsetHeight &&
        shouldAnchorBottom
      ) {
        setShouldAnchor(true);
        setShouldAnchorBottom(false);
      }
    }
    window.addEventListener("scroll", handleAnchorBottom);
    return function cleanup() {
      window.removeEventListener("scroll", handleAnchorBottom);
    };
  });

  return (
    <div className="animate__animated animate_fadeIn">
      <Row>
        <Col span={4}>
          <LeftContent
            ref={LeftContentDOM}
            width={leftContentWidth}
            shouldAnchor={shouldAnchor}
            shouldAnchorBottom={shouldAnchorBottom}></LeftContent>
        </Col>
        <Col id="product" span={20}>
          <Col style={{ marginLeft: "30px", marginRight: "30px" }}>
            <RightContent></RightContent>
            <ListItem></ListItem>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
