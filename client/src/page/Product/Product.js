import React, { useEffect, useState } from "react";
import 'animate.css';
import { Row, Col } from "antd";
import { ProductSelection } from "../../components";
import { RightContent, ListItem } from "../../components/RightContent";

const Product = (props) => {
  const [shouldAnchorBottom, setShouldAnchorBottom] = useState(null);
  const LeftContentDOM = React.createRef();

  useEffect(() => {
    function handleAnchorBottom() {
      if (!LeftContentDOM.current) return;
      if (
        window.scrollY + LeftContentDOM.current.offsetHeight >
          document.getElementById("product").offsetHeight &&
        !shouldAnchorBottom
      ) {
        setShouldAnchorBottom(true);
      } else if (
        window.scrollY + LeftContentDOM.current.offsetHeight <
          document.getElementById("product").offsetHeight &&
        shouldAnchorBottom
      ) {
        setShouldAnchorBottom(false);
      }
    }
    window.addEventListener("scroll", handleAnchorBottom);
    return function cleanup() {
      window.removeEventListener("scroll", handleAnchorBottom);
    };
  });

  return (
    <div className="animate__animated animate__fadeIn">
    <Row>
      <Col span={4}>
        <ProductSelection
          ref={LeftContentDOM}
          shouldAnchorBottom={shouldAnchorBottom}
        />
      </Col>
      <Col id="product" span={20}>
        <Col>
          <RightContent></RightContent>
          <ListItem></ListItem>
        </Col>
      </Col>
    </Row>
    </div>
  );
};

export default Product;
