import React from "react";
import styles from "./Brands.module.css";
import { Row, Col } from "antd";

const Brands = (props) => {
  const onClick = (e) => {
    const { name } = e.target;
    console.log(name);
  };
  return (
    <Row className="Brands">
      <Col offset={1} span={22}>
        <Row gutter={[32, 16]} justify="space-between" align="middle">
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="img"
              name="lenovo"
              onClick={onClick}
              className={styles.brands}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png"
            ></img>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="img"
              name="asus"
              onClick={onClick}
              className={styles.brands}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png"
            ></img>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="img"
              name="dell"
              onClick={onClick}
              className={styles.brands}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/640px-Dell_Logo.png"
            ></img>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="img"
              name="acer"
              onClick={onClick}
              className={styles.brands}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png"
            ></img>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            xs={{ span: 24 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              alt="img"
              name="msi"
              onClick={onClick}
              className={styles.brands}
              src="https://logos-download.com/wp-content/uploads/2019/11/Msi_Logo.png"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col span={24} className={styles.description}>
            <Row justify="center">
              <Col style={{ fontSize: "24px", color: "#4C4C4C", fontWeight: "bold" }}>
                  SẢN PHẨM ĐA DẠNG
              </Col>
            </Row>
            <Row justify="center">
              <Col
                style={{
                  marginTop: "20px",
                  fontSize: "24px",
									color: "#4C4C4C",
									padding: "0 60px"
                }}
              >
                Tự hào là nhà phân phối của các thương hiệu Laptop nổi tiếng
                trên thế giới. Chúng tôi mang lại sự đa dạng về sự lựa chọn cho
                khách hàng.
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Brands;
