import React from "react";
import { Row, Col, Input, Typography } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
// import { Link, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import styles from "./Footer.module.css";
import MapShow from "../Map/MapShow";

const { Search } = Input;

const Footer = (props) => {
  return (
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
          <p className={styles.para}>Trung tâm phân phối laptop dành riêng cho bạn</p>
          <p className={styles.para}>Địa chỉ tại 69 Trần Duy Hưng</p>
          <Row>
            <FacebookOutlined className={styles.icon} />
            <InstagramOutlined className={styles.icon} />
            <TwitterOutlined className={styles.icon} />
          </Row>
        </Col>
        <Col span={11} className="col3">
          <div>
            <Typography className="title3">Thông tin thêm</Typography>
            <Typography className="para">Về chúng tôi</Typography>
            <Typography className="para">Chính sách bảo mật</Typography>
            <Typography className="para">Điều khoản</Typography>
          </div>
          <div>
            <Typography className="title3">Dịch vụ khách hàng</Typography>
            <Typography className="para">Bảo hành</Typography>
            <Typography className="para">Vân chuển đơn hàng</Typography>
            <Typography className="para">Liên hệ chúng tôi</Typography>
          </div>
          <div>
            <Typography className="title3">Tài khoản</Typography>
            <Typography className="para">Giỏ hàng</Typography>
            <Typography className="para">Lịch sử đặt hàng</Typography>
            <Typography className="para">Thay đổi mật khẩu</Typography>
          </div>
        </Col>
      </Col>
      <Col offset={1}></Col>
      <Col span={24}>
        <Typography className="para">
          Bản quyền @ 2020 website thuộc SACHUPHY
        </Typography>
        <Typography className="para">Về đầu trang</Typography>
      </Col>
    </Row>
  );
};

export default Footer;

/* <Row className="row2">
  <Col className="col2">
  <Search
  className="input"
  placeholder="Nhập email của bạn tại đây"
  allowClear
  enterButton="Tham gia"
  size="large"
  // onSearch={handleSendEmail}
  />
  </Col>
</Row> */
