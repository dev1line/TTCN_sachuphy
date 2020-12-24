import React from "react";
import "./About.css";
import "animate.css";
import { Col,Row } from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Cards } from "../../components";

const About = (props) => {
  const teammate = [
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Phuc",
      description: "Hello Hoan =))))",
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hoaneekkk",
      description: "Chao cac ban nho'",
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hoaneekkk",
      description: "Chao cac ban nho'",
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hoaneekkk",
      description: "Chao cac ban nho'",
    },
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hoaneekkk",
      description: "Chao cac ban nho'",
    },
  ];

  return (
    <div
      style={{ marginBottom: "200px" }}
      className="about animate__animated animate__fadeIn">
      <Row justify="center" gutter={[32,32]}>
        {teammate.map((teammate, i) => (
          <Col span={8} key={i}>
            <Cards
              img={teammate.img}
              name={teammate.name}
              des={teammate.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default About;
