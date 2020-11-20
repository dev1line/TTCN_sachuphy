import React from "react";
import styles from "./styles.module.css";
import { Row, Col, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CommentsCarousel = (props) => {
  const ref = React.createRef();
  const handlePrev = (e) => {
    ref.current.prev();
  };
  const handleNext = (e) => {
    ref.current.next();
  };

  const Comments = [
    {
      src:
        "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      description: {
        dateBought: "15/10/2020",
        review:
          '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."',
      },
    },
    {
      src:
        "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      description: {
        dateBought: "15/10/2020",
        review:
          '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."',
      },
    },
    {
      src:
        "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      description: {
        dateBought: "15/10/2020",
        review:
          '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."',
      },
    },
    {
      src:
        "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      description: {
        dateBought: "15/10/2020",
        review:
          '"Tôi thực sự rất hài lòng sản phẩm ở đây,mọi thứ rất hoàn hảo, dịch vụ rất tốt."',
      },
    },
    {
      src:
        "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      description: {
        dateBought: "15/10/2020",
        review:
          '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."',
      },
    },
  ];
  return (
    <Row span={24} gutter={[0, 40]}>
      <Col span={3}>
        <LeftOutlined onClick={handlePrev} className={styles.left} />
      </Col>
      <Col span={18}>
        <Carousel ref={ref}>
          {Comments.map((comment, i) => (
            <Row
              align="middle"
              justify="space-between"
              className={styles.container}
              key = {i}
            >
              <Col span={11}>
                <img className={styles.img} alt="img" src={comment.src}></img>
              </Col>
              <Col span={11} className={styles.comment}>
                <i className={styles.review}>{comment.description.review}</i>{" "}
                <br />
                <i className={styles.author}>{comment.author}</i>
                <p className={styles.date}>
                  *Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày
                  {comment.description.dateBought}
                </p>
              </Col>
            </Row>
          ))}
        </Carousel>
      </Col>
      <Col span={3}>
        <RightOutlined onClick={handleNext} className={styles.right} />
      </Col>
      <Col span={24}>
        <p className={styles["highlights-comment"]}> 
          NHẬN XÉT TIÊU BIỂU
        </p>
      </Col>
      <Col span={16} offset={4} className={styles.content}>
        <div>
          Chúng tôi luôn đánh giá cao những nhận xét của khách hàng dành cho
          chúng tôi và hoàn toàn trung thực trong việc trình bày các
          nhận xét.
        </div>
      </Col>
    </Row>
  );
};

export default CommentsCarousel;
