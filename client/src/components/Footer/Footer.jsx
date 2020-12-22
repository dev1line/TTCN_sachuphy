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

const { Search } = Input;

function scrollToTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = (props) => {
  return (
    <Row>
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
                  lg={{ span: 7 }}
                  sm={{ span: 10 }}
                  xs={{ span: 24 }}
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
                    <a href="/">
                      <FacebookOutlined className={styles.icon} />
                    </a>
                    <a href="/">
                      <InstagramOutlined className={styles.icon} />
                    </a>
                    <a href="/">
                      <TwitterOutlined className={styles.icon} />
                    </a>
                  </Row>
                </Col>
                <Col
                  lg={{ span: 5 }}
                  sm={{ span: 10 }}
                  xs={{ span: 24 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Thông tin thêm</p>
                  <p className={styles["sub-content"]}>Về chúng tôi</p>
                  <p className={styles["sub-content"]}>Chính sách bảo mật</p>
                  <p className={styles["sub-content"]}>Điều khoản</p>
                </Col>
                <Col
                  lg={{ span: 5 }}
                  sm={{ span: 10 }}
                  xs={{ span: 24 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Dịch vụ khách hàng</p>
                  <p className={styles["sub-content"]}>Bảo hành</p>
                  <p className={styles["sub-content"]}>Vân chuển đơn hàng</p>
                  <p className={styles["sub-content"]}>Liên hệ chúng tôi</p>
                </Col>
                <Col
                  lg={{ span: 5 }}
                  sm={{ span: 10 }}
                  xs={{ span: 24 }}
                  style={{ margin: "0 auto" }}
                  className={styles.infor}
                >
                  <p className={styles.content}>Tài khoản</p>
                  <p className={styles["sub-content"]}>Giỏ hàng</p>
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
                  <a href="/" onClick={scrollToTop} className={styles.para}>
                    Về đầu trang
                  </a>
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
