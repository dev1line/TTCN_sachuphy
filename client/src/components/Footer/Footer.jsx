import React from "react";
import { Row, Col, Input } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "./Footer.module.css";
import MapShow from "../Map/MapShow";
import { Link } from 'react-router-dom';

const { Search } = Input;

function scrollToTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = (props) => {
  return (
    <Row className={styles.container}>
      <Col span={24}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Row className={styles.footer}>
            <Col span={24}>
              <MapShow />
            </Col>
            <Col className={styles.newsletters}>
              <p>
                Đăng ký ngay để nhận thông báo email về các ưu đãi từ chúng tôi
              </p>
            </Col>
            <Col className={styles.search}>
              <Search
                placeholder="Nhập email của bạn tại đây ..."
                allowClear
                enterButton="Tham gia"
                size="large"
              />
            </Col>
            <Col offset={1} span={22} className={styles.footer_body}>
              <Row style={{ width: "100%" }} gutter={[32, 32]}>
                <Col
                  lg={{ span: 6 }}
                  sm={{ span: 10 }}
                  xs={{ span: 10 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.name}>SACHUPHY</p>
                  <p className={styles["sub-content"]}>
                    Trung tâm phân phối laptop dành riêng cho bạn
                  </p>
                  <p className={styles["sub-content"]}>
                    Địa chỉ tại 69 Trần Duy Hưng
                  </p>
                  <Row>
                    <div style={{cursor:"pointer"}}>
                      <FacebookOutlined className={styles.icon} />
                    </div>
                    <div style={{cursor:"pointer"}}>
                      <InstagramOutlined className={styles.icon} />
                    </div>
                    <div style={{cursor:"pointer"}}>
                      <TwitterOutlined className={styles.icon} />
                    </div>
                  </Row>
                </Col>
                <Col
                  lg={{ span: 6 }}
                  sm={{ span: 10 }}
                  xs={{ span: 10 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Thông tin thêm</p>
                  <Link to="/about" onClick={() => scrollToTop()} className={styles["sub-content"]}>Về chúng tôi</Link>
                  <p className={styles["sub-content"]}>Chính sách bảo mật</p>
                  <p className={styles["sub-content"]}>Điều khoản</p>
                </Col>
                <Col
                  lg={{ span: 6 }}
                  sm={{ span: 10 }}
                  xs={{ span: 10 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Dịch vụ khách hàng</p>
                  <p className={styles["sub-content"]}>Bảo hành</p>
                  <p className={styles["sub-content"]}>Vân chuyển đơn hàng</p>
                  <Link to="/contact" onClick={() => scrollToTop()} className={styles["sub-content"]}>Liên hệ chúng tôi</Link>
                </Col>
                <Col
                  lg={{ span: 6 }}
                  sm={{ span: 10 }}
                  xs={{ span: 10 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Tài khoản</p>
                  <Link to="/shopcart" onClick={() => scrollToTop()} className={styles["sub-content"]}>Giỏ hàng</Link>
                  <p className={styles["sub-content"]}>Lịch sử đặt hàng</p>
                  <p className={styles["sub-content"]}>Thay đổi mật khẩu</p>
                </Col>
              </Row>
            </Col>
            <Col span={24} className={styles.copyright}>
              <Row style={{ width: "100%" }}>
                <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <p className={styles.para}>
                    Bản quyền @ 2020 website thuộc SACHUPHY
                  </p>
                </Col>
                <Col
                  lg={{ span: 12 }}
                  xs={{ span: 24 }}
                  style={{ textAlign: "end" }}
                >
                  <div onClick={scrollToTop} className={styles.para}>
                    Về đầu trang
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
