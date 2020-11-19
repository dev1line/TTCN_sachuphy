import React from "react";
import styles from "./styles.module.css";
import { Row, Col, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CommentsCarousel = (props) => {

  const ref = React.createRef()
  const handlePrev = (e) => {
    ref.current.prev()
  }
  const handleNext = (e) => {
    ref.current.next()
  }

  return (
    <Row span={24}>
      <Col span={3}>
        <LeftOutlined
          onClick={handlePrev}
          style={{
            display: "block",
            float: "right",
            fontSize: "50px",
            marginTop: "200px",
          }}
        />
      </Col>
      <Col span={18}>
        <Carousel autoplay ref={ref}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ float: "left", marginLeft: "40px" }}>
              <img
                style={{ height: "400px", width: "400px" }}
                alt="img"
                src="https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg"
              ></img>
            </div>
            <div
              style={{
                textAlign: "right",
                display: "block",
                marginTop: "140px",
                marginRight: "40px",
              }}
            >
              <p style={{ fontSize: "28px", fontStyle: "italic" }}>
                "Tôi thực sự rất hài lòng sản phẩm ở đây, <br></br>mọi thứ rất
                hoàn hảo, dịch vụ rất tốt."
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "24px",
                  color: "#1789FC",
                }}
              >
                Nguyễn Thành Hoàng
              </p>
              <p style={{ fontSize: "16px", color: "#636363" }}>
                *Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày
                15/10/2020
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ float: "left", marginLeft: "40px" }}>
              <img
                style={{ height: "400px", width: "400px" }}
                alt="img"
                src="https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg"
              ></img>
            </div>
            <div
              style={{
                textAlign: "right",
                display: "block",
                marginTop: "140px",
                marginRight: "40px",
              }}
            >
              <p style={{ fontSize: "28px", fontStyle: "italic" }}>
                "Tôi thực sự rất hài lòng sản phẩm ở đây, <br></br>mọi thứ rất
                hoàn hảo, dịch vụ rất tốt."
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "24px",
                  color: "#1789FC",
                }}
              >
                Nguyễn Thành Hoàng
              </p>
              <p style={{ fontSize: "16px", color: "#636363" }}>
                *Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày
                15/10/2020
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ float: "left", marginLeft: "40px" }}>
              <img
                style={{ height: "400px", width: "400px" }}
                alt="img"
                src="https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg"
              ></img>
            </div>
            <div
              style={{
                textAlign: "right",
                display: "block",
                marginTop: "140px",
                marginRight: "40px",
              }}
            >
              <p style={{ fontSize: "28px", fontStyle: "italic" }}>
                "Tôi thực sự rất hài lòng sản phẩm ở đây, <br></br>mọi thứ rất
                hoàn hảo, dịch vụ rất tốt."
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "24px",
                  color: "#1789FC",
                }}
              >
                Nguyễn Thành Hoàng
              </p>
              <p style={{ fontSize: "16px", color: "#636363" }}>
                *Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày
                15/10/2020
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ float: "left", marginLeft: "40px" }}>
              <img
                style={{ height: "400px", width: "400px" }}
                alt="img"
                src="https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg"
              ></img>
            </div>
            <div
              style={{
                textAlign: "right",
                display: "block",
                marginTop: "140px",
                marginRight: "40px",
              }}
            >
              <p style={{ fontSize: "28px", fontStyle: "italic" }}>
                "Tôi thực sự rất hài lòng sản phẩm ở đây, <br></br>mọi thứ rất
                hoàn hảo, dịch vụ rất tốt."
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "24px",
                  color: "#1789FC",
                }}
              >
                Nguyễn Thành Hoàng
              </p>
              <p style={{ fontSize: "16px", color: "#636363" }}>
                *Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày
                15/10/2020
              </p>
            </div>
          </div>
        </Carousel>
      </Col>
      <Col span={3}>
        <RightOutlined
          onClick={handleNext}
          style={{
            display: "block",
            float: "left",
            fontSize: "50px",
            marginTop: "200px",
          }}
        />
      </Col>
    </Row>
  );
};

export default CommentsCarousel;
