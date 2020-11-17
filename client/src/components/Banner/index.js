import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export const Banner1 = (props) => {
  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
      }}
    >
      <Col>
        <img
          className="imgBanner"
          alt="img"
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </Col>
      <Col>
        <img
          className="imgBanner"
          alt="img"
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </Col>
      <Col>
        <img
          className="imgBanner"
          alt="img"
          src="https://cdn.tgdd.vn/Products/Images/42/220522/Feature/samsung-galaxy-note-20-ultra-km-720x333.jpg"
        ></img>
      </Col>
    </Row>
  );
};

export const Banner2 = (props) => {
  return (
    <Row
      style={{
        backgroundColor: "#1789FC",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <p className="lxtext">
        What are you still waiting for? Choose your own lovely laptop now!
      </p>
      <Link to="/product">
        <Button className="lxShop">SHOPPING NOW</Button>
      </Link>
    </Row>
  );
};

export const Banner3 = (props) => {
  const onClick = (e) => {
    const { name } = e.target;
    console.log(name);
  };
  return (
    <Row style={{ height: "100%" }}>
      <Col flex={2}>
        <img
          alt="img"
          name="lenovo"
          onClick={onClick}
          className="brand"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png"
        ></img>
      </Col>
      <Col flex={2}>
        <img
          alt="img"
          name="asus"
          onClick={onClick}
          className="brand"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png"
        ></img>
      </Col>
      <Col flex={2}>
        <img
          alt="img"
          name="dell"
          onClick={onClick}
          className="brand"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/640px-Dell_Logo.png"
        ></img>
      </Col>
      <Col flex={2}>
        <img
          alt="img"
          name="acer"
          onClick={onClick}
          className="brand"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png"
        ></img>
      </Col>
      <Col flex={2}>
        <img
          alt="img"
          name="msi"
          onClick={onClick}
          className="brand"
          src="https://logos-download.com/wp-content/uploads/2019/11/Msi_Logo.png"
        ></img>
      </Col>
    </Row>
  );
};
