import React from "react";
import { Row, Col, Input, Typography } from "antd";
import { FacebookOutlined, InstagramOutlined ,TwitterOutlined} from "@ant-design/icons";
// import { Link, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "./style.css";
const {Search} = Input;
const Footer = (props) => {
    return (
        <Row className="container">
            <Row span={24} className="row1">
                <Col className="col1">
                    <Typography className="title1">Đăng ký ngay để nhận thông báo email về các ưu đãi từ chúng tôi</Typography>
                </Col>
            </Row>
            <Row  className="row2">
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
            </Row>
            <Row className="row3">
                <Col span={12} className="col31">
                    <Typography className="title31">SACHUPHY</Typography>
                    <Typography className="para">Trung tâm phân phối laptop dành riêng cho bạn</Typography>
                    <Typography className="para">Địa chỉ tại 69 Trần Duy Hưng</Typography>
                    <Row>
                        <FacebookOutlined className="icon"/>
                        <InstagramOutlined  className="icon"/>
                        <TwitterOutlined  className="icon"/>
                    </Row>
                </Col>
                <Col span={4} className="col3">
                    <Typography className="title3">Thông tin thêm</Typography>
                    <Typography className="para">Về chúng tôi</Typography>
                    <Typography className="para">Chính sách bảo mật</Typography>
                    <Typography className="para">Điều khoản</Typography>
                </Col>
                <Col span={4} className="col3">
                    <Typography className="title3">Dịch vụ khách hàng</Typography>
                    <Typography className="para">Bảo hành</Typography>
                    <Typography className="para">Vân chuển đơn hàng</Typography>
                    <Typography className="para">Liên hệ chúng tôi</Typography>
                </Col>
                <Col span={4} className="col3">
                    <Typography className="title3">Tài khoản</Typography>
                    <Typography className="para">Giỏ hàng</Typography>
                    <Typography className="para">Lịch sử đặt hàng</Typography>
                    <Typography className="para">Thay đổi mật khẩu</Typography>
                </Col>
            </Row>
            <Row className="row4">
                <Typography className="para">Bản quyền @ 2020 website thuộc SACHUPHY</Typography>
                <Typography className="para">Về đầu trang</Typography>
            </Row>
        </Row>
    );
}

export default Footer;