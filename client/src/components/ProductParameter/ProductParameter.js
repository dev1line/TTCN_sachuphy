import React, { useEffect, useState } from "react";
import { Row, Col, Button, Badge, Carousel } from "antd";
import { Link, NavLink } from "react-router-dom";
import { CheckOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./ProductParameter.module.css";
import { Loading } from "../../components";

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
        ? imageProduct.length - 1
        : currentCarouselIndex - 1
    );
  }
  function next(e) {
    carousel.current.next();
    setCurrentCarouselIndex(
      currentCarouselIndex === imageProduct.length - 1
        ? 0
        : currentCarouselIndex + 1
    );
  }
  useEffect(() => {
    console.log(props.options);
  }, [props.options]);

  const imageProduct = [
    {
      img:
        "https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png",
    },
    {
      img:
        "https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png",
    },
    {
      img:
        "https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png",
    },
    {
      img:
        "https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png",
    },
    {
      img:
        "https://hanoicomputercdn.com/media/product/52023_17z90n_v_ah75a5.png",
    },
  ];
  return (
    <Row style={{ marginBottom: "1vh", width: "100%" }}>
      <Col offset={1}>
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
        span={12}
        style={{ border: "1px solid #636363", margin: "2vh 0 1vh" }}
      >
        <Carousel ref={carousel} style={{ borderBottom: "1px solid #636363" }}>
          {imageProduct.map((img, i) => (
            <div key={i}>
              <img
                alt="product"
                src={img.img}
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
          <Col style={{ display: "flex", padding: "10px 20px" }}>
            {imageProduct.map((img, i) => (
              <div
                key={`images${i}`}
                className={
                  i === currentCarouselIndex ? styles["is-image-active"] : {}
                }
                onClick={() => handleClickImage(null, i)}
                style={{ cursor: "pointer" }}
              >
                <img alt="product" src={img.img} width="100%" />
              </div>
            ))}
          </Col>
          <RightOutlined onClick={() => next(null)} className={styles.right} />
        </Row>
      </Col>
      <Col offset={2} span={10}>
        <Row style={{ margin: "2vh 0 1vh" }}>
          <Col span={20}>
            {props.options.map((option, i) => (
              <NavLink
                key={i}
                exact
                activeClassName={styles["is-active"]}
                to={`/product/${option.slug}`}
              >
                <Button
                  style={{
                    height: "5vh",
                    width: "100px",
                    marginRight: "10px",
                    padding: "2px",
                    textOverflow: "ellipsis",
                  }}
                >
                  {" "}
                  {`${i === 0 ? "Mặc định" : option.name}`}
                </Button>
              </NavLink>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <span style={{ fontWeight: "500", fontSize: "30px" }}>
              {(props.price * (100 - props.discount)) / 100} VNĐ
            </span>
            <br></br>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Giá gốc:{" "}
            </span>
            <span style={{ textDecoration: "line-through", color: "#636363" }}>
              {props.price}
            </span>
          </Col>
          <Col span={20}>
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
                    <Badge
                      key={i}
                      style={{
                        position: "absolute",
                        top: "2px",
                        right: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                      count={<CheckOutlined style={{ color: "green" }} />}
                    >
                      <Col
                        style={{
                          background: `${color}`,
                          height: "3vh",
                          width: "3vh",
                          borderRadius: "999px",
                          marginRight: "1vh",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        <a href="#" className="head-example" />
                      </Col>
                    </Badge>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={20} style={{ marginTop: "3vh" }}>
            <Link to="/shopcart">
              <Button
                onClick={() => props.click(props.product)}
                type="primary"
                style={{ height: "50px" }}
              >
                Mua ngay
              </Button>
            </Link>
          </Col>
          <Col span={9} style={{ marginTop: "1vh" }}>
            <Button onClick={() => props.click(props.product)}>
              Thêm vào giỏ hàng
            </Button>
          </Col>
          <Col offset={2} span={9} style={{ marginTop: "1vh" }}>
            <Button>Xem cấu hình chi tiết</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductParameter;
