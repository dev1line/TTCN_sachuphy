import React from "react";
import styles from './Comments.module.css'
import { Col, Row, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Comments = (props) => {
  const carouselRef = React.createRef();

  const handlePrev = (e) => {
    carouselRef.current.prev();
  };

  const handleNext = (e) => {
    carouselRef.current.next();
  };

  const comments = [
    {
      img: "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      desciption: {
        dateBought: "*Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày 15/10/2020",
        review: '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."'
      }
    },
    {
      img: "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      desciption: {
        dateBought: "*Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày 15/10/2020",
        review: '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."'
      }
    },
    {
      img: "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      desciption: {
        dateBought: "*Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày 15/10/2020",
        review: '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."'
      }
    },
    {
      img: "https://msmobile.com.vn/upload_images/images/hinh-nen-mau-den-cho-dien-thoai-1.jpg",
      author: "ReturnNguyen",
      desciption: {
        dateBought: "*Đã mua sản phẩm Lenovo Legion 5 Gaming Laptop vào ngày 15/10/2020",
        review: '"Tôi thực sự rất hài lòng sản phẩm ở đây, mọi thứ rất hoàn hảo, dịch vụ rất tốt."'
      }
    },
  ]

  return (
    <div>
      <Row gutter={[0,60]}>
        <Col span={3}>
          <LeftOutlined
            className={styles.previous}
            onClick={handlePrev}
          />
        </Col>
        <Col span={18}>
          <Carousel autoplay ref={carouselRef} className={styles.carousel}>
            {comments.map((comments, i) => (
              <div key={i} className={styles.comments}>
                <div >
                  <img
                    height="400px"
                    width="400px"
                    alt="img"
                    src={comments.img}
                    ></img>
                </div>
                <div className={styles["comment-content"]}>
                  <i>
                    <p className={styles.review}>
                      {comments.desciption.review}
                    </p>
                    <p className={styles.customer}>
                      {comments.author}
                    </p>
                    <p className={styles.date}>
                      {comments.desciption.dateBought}
                    </p>
                  </i>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={3}>
          <RightOutlined
            className={styles.next}
            onClick={handleNext}
          />
        </Col>
      </Row>
      <Row >
        <Col span={24} >
          <p className={styles.highlights}>
            NHẬN XÉT TIÊU BIỂU
          </p>
          <p className={styles.content}>
            Chúng tôi luôn đánh giá cao những nhận xét của khách hàng dành cho
          chúng tôi và hoàn toàn trung thực trong việc trình bày các
          nhận xét.
        </p>
        </Col>
      </Row>
    </div>
  );
};

export default Comments;