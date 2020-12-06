import React from "react";
import "./About.css";
import "animate.css";
import { Timeline } from "antd";
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
    {
      img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hoaneekkk",
      description: "Chao cac ban nho'",
    },
  ];

  return (
    <div style={{marginBottom:"200px"}} className="about animate__animated animate__fadeIn">
      <Timeline mode="alternate">
        <Timeline.Item
          dot={<NotificationOutlined style={{ fontSize: "20px" }} />}>
          Create a services site 2020-11-01
        </Timeline.Item>
        <Timeline.Item>Create by Sachuphy team</Timeline.Item>
        {teammate.map((teammate, i) => (
          <Timeline.Item key={i} style={i % 2 === 1 ? { 
            display: "flex", 
            paddingRight: "180px",
            justifyContent:"center", 
          } : {}}
            dot={
              <UserOutlined
                style={{
                  fontSize: "20px",
                }}
              />
            }>
            <Cards
              img={teammate.img}
              name={teammate.name}
              des={teammate.description}
            />
          </Timeline.Item>
        ))}
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: "20px" }} />}>
          Release in 2021-21-2
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default About;
