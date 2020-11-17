import React from "react";
import "./styles.css";
import "animate.css";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { Row, Col, Tabs, Form, Input, InputNumber, Button, Rate } from "antd";
import {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
  GithubOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const About = (props) => {
  return (
    <Row className="about animate__animated animate__fadeIn">
      {/* <Col offset={3}></Col>
      <Col span={18}>
        <div className="image-background">
          <h1 data-aos="fade-down" data-aos-duration="2000" className="page">
            ABOUT US
          </h1>
          <a
            href="#information"
            className="page down"
            data-aos="fade-down"
            data-aos-duration="3000">
            <DownOutlined />
          </a>
        </div>
      </Col>
      <Col offset={3}></Col> */}
      <Col
        id="information"
        span={3}
        style={{
          background:
            "linear-gradient(180deg, rgba(248,252,255,1) 0%, rgba(250,253,255,1) 31%, rgba(216,238,255,1) 31%, rgba(214,237,255,1) 100%)",
        }}
      ></Col>
      <Col span={18}>
        <Tabs defaultActiveKey="1" type="card" tabPosition="bottom">
          <TabPane
            tab={
              <div className="tab">
                <h1 className="header">We are</h1>
                <h4 className="header">We are</h4>
                <h4 className="header">We are</h4>
                <h4 className="header">We are</h4>
              </div>
            }
            key="1"
          >
            <div className="content-wrapper">
              <h1 className="title">We are Sachuphy</h1>
              <div className="card-list animate__animated animate__fadeIn">
                <article className="card">
                  <header className="card-header">
                    <p>Teammate</p>
                    <h2>Nguyen Thanh Hoan</h2>
                  </header>
                </article>
                <article className="card">
                  <header className="card-header">
                    <p>Teammate</p>
                    <h2>Tran Tan Chung</h2>
                  </header>
                </article>
                <article className="card">
                  <header className="card-header">
                    <p>Teammate</p>
                    <h2>Ho Le Huy</h2>
                  </header>
                </article>
                <article className="card">
                  <header className="card-header">
                    <p>Teammate</p>
                    <h2>Nguyen Tuan Quang Sang</h2>
                  </header>
                </article>
                <article className="card">
                  <header className="card-header">
                    <p>Teammate</p>
                    <h2>Le Xuan Phuc</h2>
                  </header>
                </article>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="tab">
                <h1 className="header">Contact us</h1>
                <h4 className="header">Contact us</h4>
                <h4 className="header">Contact us</h4>
                <h4 className="header">Contact us</h4>
              </div>
            }
            key="2"
          >
            <div className="content-wrapper animate__animated animate__fadeIn">
              <Row>
                <Col span={12}>
                  <h1 className="title">Get in touch</h1>
                  <Form {...layout} style={{ marginTop: "0" }}>
                    <Form.Item
                      style={{ marginBottom: "20px" }}
                      name={["Name"]}
                      label="Name"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item name={["Email"]} label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item name={["Age"]} label="Age">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item name="rate" label="Rate">
                      <Rate />
                    </Form.Item>
                    <Form.Item name={["user", "message"]} label="Message">
                      <Input.TextArea style={{ resize: "none" }} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={12}>
                  <p></p>
                  <h1 className="title animate__animated animate__fadeIn">Social media</h1>
                  <div className="social-media">
                    <a className="media" href="#">
                      <InstagramOutlined />
                    </a>
                    <a className="media" href="#">
                      <GithubOutlined />
                    </a>
                    <a className="media" href="#">
                      <TwitterOutlined />
                    </a>
                    <a className="media" href="#">
                      <YoutubeFilled />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="tab">
                <h1 className="header">What we do</h1>
                <h4 className="header">What we do</h4>
                <h4 className="header">What we do</h4>
                <h4 className="header">What we do</h4>
              </div>
            }
            key="3"
          >
            <Row>
              <Col offset={12}></Col>
              <Col span={12}>
                <div className="content-wrapper animate__animated animate__fadeIn">
                  <h1 className="title">Ưhat ưe do</h1>
                  <div className="content animate__animated animate__fadeIn">
                    <h1>Sachuphy</h1>
                    <p className="sub-content animate">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Asperiores laboriosam sapiente repellat cupiditate
                      officiis impedit dicta? Aliquam, dolores repellat optio
                      dolore sed deserunt labore rem officia, placeat dicta
                      assumenda itaque.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Col>
      <Col
        span={3}
        style={{ backgroundColor: "#D6EDFF", height: "62vh" }}
      ></Col>
    </Row>
  );
};

export default About;
