import React, { useEffect, useState, } from "react";
import { Row, Col } from "antd";
import LeftContent from "../../components/LeftContent";
import { RightContent, ListItem } from "../../components/RightContent";

const Product = (props) => {
  const [shouldAnchor, setShouldAnchor] = useState(null);
  const [leftContentWidth, setLeftContentWidth] = useState(0);
  const LeftContentDOM = React.createRef();
  
  useEffect(() => {
    function handleAnchor() {
      if (window.scrollY >= document.getElementById("product").offsetTop && !shouldAnchor) {
        if(!LeftContentDOM.current) return
        setLeftContentWidth(LeftContentDOM.current.clientWidth)
        return setShouldAnchor(true);
      }
      else if(window.scrollY < document.getElementById("product").offsetTop && shouldAnchor) {
        setLeftContentWidth(0)
        return setShouldAnchor(false)
      }

    }
    window.addEventListener("scroll", handleAnchor)

    return function cleanup() {
      window.removeEventListener("scroll", handleAnchor)
    }
  });



  return (
    <Row>
      {/* <Col span={24}><Header/></Col> */}
      <Col span={4}>
        <LeftContent ref={LeftContentDOM} width={leftContentWidth} shouldAnchor={shouldAnchor}></LeftContent>
      </Col>
      <Col id="product" span={20}>
        <Col style={{ marginLeft: "30px", marginRight: "30px" }}>
          <RightContent></RightContent>
          <ListItem></ListItem>
        </Col>
      </Col>
    </Row>
  );
};

export default Product;
