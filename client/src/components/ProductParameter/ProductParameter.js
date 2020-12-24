import React, { useState } from "react";
import { Row, Col, Button, Carousel } from "antd";
import { Link, NavLink } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./ProductParameter.module.css";
import { formatPrice } from "../../help/formatPrice";
import config from "../../config";

const ProductParameter = (props) => {
  const carousel = React.createRef();
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  function handleClickImage(e, index) {
    setCurrentCarouselIndex(index);
    carousel.current.goTo(`${index}`, false);
  }
  function previous(e) {
    carousel.current.prev();
    setCurrentCarouselIndex(
      currentCarouselIndex === 0
        ? props.img.length - 1
        : currentCarouselIndex - 1
    );
  }
  function next(e) {
    carousel.current.next();
    setCurrentCarouselIndex(
      currentCarouselIndex === props.img.length - 1
        ? 0
        : currentCarouselIndex + 1
    );
  }
  // useEffect(() => {
  //   console.log(props.options);
  // }, [props.options]);

  return (
    <Row style={{ marginBottom: "20px", width: "100%" }} justify="center">
      <Col offset={1} span={23}>
        <Link to="/product">Tất cả sản phẩm</Link> {">"}{" "}
        <Link to={`/product/${props.slug}`}>{props.name}</Link>
      </Col>
      <Col span={24} style={{ borderBottom: "1px solid #ababab" }}>
        <Row>
          <Col offset={1}>
            <h1>{props.name}</h1>
          </Col>
        </Row>
      </Col>
      <Col
        lg={{ span: 12 }}
        md={{ span: 13 }}
        xs={{ span: 24 }}
        style={{ border: "1px solid #636363", margin: "2vh 0 1vh" }}>
        <Carousel ref={carousel} style={{ borderBottom: "1px solid #636363" }}>
          {props.img.map((img, i) => (
            <div key={i}>
              <img
                alt="product"
                src={`http://${config.HOST}:${config.PORT}/api/v1/images/${img}`}
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          ))}
        </Carousel>
        <Row>
          <LeftOutlined
            onClick={() => previous(null)}
            className={styles.left}
          />
          <Col span={24}>
            <Row>
              {props.img.map((img, i) => (
                <Col
                  span={6}
                  key={`images${i}`}
                  className={
                    i === currentCarouselIndex ? styles["is-image-active"] : {}
                  }
                  onClick={() => handleClickImage(null, i)}
                  style={{ cursor: "pointer", width: "100%", height:"120px", padding: "20px 20px 20px"}}>
                  <img
                    alt="product"
                    src={`http://${config.HOST}:${config.PORT}/api/v1/images/${img}`}
                    height="100%" width="100%"
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <RightOutlined onClick={() => next(null)} className={styles.right} />
        </Row>
      </Col>
      <Col lg={{ span: 10, offset: 2 }} xs={{ span: 20 }} md={{ span: 13 }}>
        <Row style={{ margin: "2vh 0 1vh" }}>
          <Col span={24}>
            {props.options.map((option, i) => (
              <NavLink
                key={i}
                exact
                activeClassName={styles["is-active"]}
                to={`/product/${option.slug}`}>
                <Button
                  style={{
                    height: "5vh",
                    width: "100px",
                    marginRight: "10px",
                    padding: "2px",
                    textOverflow: "ellipsis",
                  }}>
                  {" "}
                  {`${i === 0 ? "Mặc định" : option.name}`}
                </Button>
              </NavLink>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span style={{ fontWeight: "500", fontSize: "30px" }}>
              {/* {formatMoney((props.price * (100 - props.discount)) / 100)} VNĐ */}
              {formatPrice((props.price * (100 - props.discount)) / 100)} VNĐ
            </span>
            <br></br>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Giá gốc:{" "}
            </span>
            <span style={{ textDecoration: "line-through", color: "#636363" }}>
              {/* {formatMoney(props.price)} VNĐ */}
              {formatPrice(props.price)}
            </span>
          </Col>
          <Col span={24}>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Màn hình:</Col>
              <Col span={14}>
                {props.display.length
                  ? props.display[0].more_info
                  : "Dang cap nhat ..."}
              </Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>CPU:</Col>
              <Col span={14}>{props.processor}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>RAM:</Col>
              <Col span={14}>
                {props.memory.length
                  ? props.memory.map((memory, i) => (
                      <div key={i}>
                        {memory.text}
                        {`${i === 0 ? ", (On board)" : ""}`}
                        {`${i === props.memory.length - 1 ? "" : ","}`} <br />
                      </div>
                    ))
                  : "Dang cap nhat ..."}
              </Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Ổ cứng:</Col>
              <Col span={14}>
                {props.storage.length
                  ? props.storage.map((storage, i) => (
                      <div key={i}>
                        {storage.text}
                        {`${i !== props.storage.length - 1 ? "," : ""}`} <br />
                      </div>
                    ))
                  : "Dang cap nhat ..."}
              </Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Hệ điều hành:</Col>
              <Col span={14}>{props.operating_system[0]}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Card đồ họa:</Col>
              <Col span={14}>{props.graphic_card}</Col>
            </Row>
            <Row style={{ padding: "10px", borderBottom: "1px solid #dbdbdb" }}>
              <Col span={10}>Màu:</Col>
              <Col span={14}>
                <Row>
                  {props.color.map((color, i) => (
                    <Col
                      style={{
                        background: `${color}`,
                        height: "3vh",
                        width: "3vh",
                        borderRadius: "999px",
                        marginRight: "1vh",
                        cursor: "pointer",
                        position: "relative",
                      }}>
                      <a href="#" className="head-example" />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: "40px" }}>
            <Link to="/shopcart">
              <Button
                onClick={() => props.click(props.product)}
                type="primary"
                style={{ height: "50px", width: "100%" }}>
                Mua ngay
              </Button>
            </Link>
          </Col>
          <Col span={24} style={{ marginTop: "1vh" }}>
            <Button
              onClick={() => props.click(props.product)}
              style={{ width: "100%", height: "40px" }}>
              Thêm vào giỏ hàng
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductParameter;
