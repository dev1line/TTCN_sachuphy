import React from "react";
import { Row, Col, Input } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "./styles.module.css";
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
    <div className={styles.container}>
      <Row className={styles.footer}>
        <Col span={24}>
          <MapShow />
        </Col>
        <div className={styles.newsletters}>
          <div>
            Đăng ký ngay để nhận thông báo email về các ưu đãi từ chúng tôi
          </div>
        </div>
        <div className={styles.search}>
          <Search
            placeholder="Nhập email của bạn tại đây ..."
            allowClear
            enterButton="Tham gia"
            size="large"
          />
        </div>
        <Col span={24} className={styles.footer_body}>
          <Col offset={1}></Col>
          <Col span={11}>
            <p className={styles.name}>SACHUPHY</p>
            <p className={styles["sub-content"]}>
              Trung tâm phân phối laptop dành riêng cho bạn
            </p>
            <p className={styles["sub-content"]}>
              Địa chỉ tại 69 Trần Duy Hưng
            </p>
            <Row>
              <a href="#">
                <FacebookOutlined className={styles.icon} />
              </a>
              <a href="#">
                <InstagramOutlined className={styles.icon} />
              </a>
              <a href="#">
                <TwitterOutlined className={styles.icon} />
              </a>
            </Row>
          </Col>
          <Col span={11} className={styles["footer-main"]}>
            <div>
              <p className={styles.content}>Thông tin thêm</p>
              <p className={styles["sub-content"]}>Về chúng tôi</p>
              <p className={styles["sub-content"]}>Chính sách bảo mật</p>
              <p className={styles["sub-content"]}>Điều khoản</p>
            </div>
            <div>
              <p className={styles.content}>Dịch vụ khách hàng</p>
              <p className={styles["sub-content"]}>Bảo hành</p>
              <p className={styles["sub-content"]}>Vân chuển đơn hàng</p>
              <p className={styles["sub-content"]}>Liên hệ chúng tôi</p>
            </div>
            <div>
              <p className={styles.content}>Tài khoản</p>
              <p className={styles["sub-content"]}>Giỏ hàng</p>
              <p className={styles["sub-content"]}>Lịch sử đặt hàng</p>
              <p className={styles["sub-content"]}>Thay đổi mật khẩu</p>
            </div>
          </Col>
        </Col>
        <Col span={24} className={styles.copyright}>
          <p className={styles.para}>Bản quyền @ 2020 website thuộc SACHUPHY</p>
          <a onClick={scrollToTop} className={styles.para}>
            Về đầu trang
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
