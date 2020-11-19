import React from "react";
import styles from "./styles.module.css";
import { Row, Col } from "antd";

const Brands = (props) => {
  const onClick = (e) => {
    const { name } = e.target;
    console.log(name);
  };

  return (
    <div>
      <Row justify="space-between" align="middle" gutter={[0, 60]}>
        <Col offset={1}></Col>
        <Col>
          <img
            alt="img"
            name="lenovo"
            onClick={onClick}
            className={styles.brand}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png"
          ></img>
        </Col>
        <Col>
          <img
            alt="img"
            name="asus"
            onClick={onClick}
            className={styles.brand}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png"
          ></img>
        </Col>
        <Col>
          <img
            alt="img"
            name="dell"
            onClick={onClick}
            className={styles.brand}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/640px-Dell_Logo.png"
          ></img>
        </Col>
        <Col>
          <img
            alt="img"
            name="acer"
            onClick={onClick}
            className={styles.brand}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1024px-Acer_2011.svg.png"
          ></img>
        </Col>
        <Col>
          <img
            alt="img"
            name="msi"
            onClick={onClick}
            className={styles.brand}
            src="https://logos-download.com/wp-content/uploads/2019/11/Msi_Logo.png"
          ></img>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row gutter={[0, 10]} justify="center" align="middle">
        <Col span={24}>
          <h1 className={styles.content}>
            SẢN PHẨM ĐA DẠNG
          </h1>
        </Col>
        <Col span={24}>
          <p className={styles["sub-content"]}>
            Tự hào là nhà phân phối của các thương hiệu Laptop nổi tiếng trên
            thế giới.<br></br>Chúng tôi mang lại sự đa dạng về sự lựa chọn cho
            khách hàng.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Brands;
