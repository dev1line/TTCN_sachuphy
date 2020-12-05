import React from "react";
import "./Contact.css";
import "animate.css";
import { Row, Col, message } from "antd";

const About = (props) => {
  const message = {
    name: "",
    email: "",
    message: "",
  };
  const onFinish = (e) => {};
  return (
    <div className="animate__animated animate__fadeIn" style={{'marginBottom': '40px'}}>
      <Row justify="center">
        <Col className="parallax" span={9} offset={2}></Col>
        <Col className="form" span={9} offset={1}>
          <div className="footer-header">
            <h1>Contact us</h1>
            <p className="sub-title">
              Contact us for a quote, help or to join the team.
            </p>
            <div className="contact-us">
              <div className="address-us">
                <p className="content">Adress</p>
                <p className="sub-content">54 Sachuphy</p>
              </div>
              <div className="email-us">
                <p className="content">Email</p>
                <p className="sub-content">sachuphy@studio.com</p>
              </div>
              <div className="phone-us">
                <p className="content">Phone</p>
                <p className="sub-content">+84 132 456 789</p>
              </div>
            </div>
          </div>
          <form className="footer-section wrapper">
            <h2 className={"message"}>Get a quote</h2>
            <div className="input-data">
              <input className="input" type="text" required></input>
              <label className="label">Name</label>
            </div>
            <div className="input-data">
              <input className="input" type="text" required></input>
              <label className="label">Email</label>
            </div>
            <div className="input-data">
              <label>Message</label>
              <textarea
                placeholder="Type here ..."
                className="textarea"></textarea>
            </div>
            <div className="btn-send">
              <button onClick={onFinish}>Send message</button>
            </div>
          </form>
          <div className="contact-footer">
            <h2 className="follow">Follow us</h2>
            <div className="social-media">
              <div className="media">
                <a className="link">Facebook</a>
              </div>
              <div className="media">
                <a className="link">Twitter</a>
              </div>
              <div className="media">
                <a className="link">Instagram</a>
              </div>
              <div className="media">
                <a className="link">Github</a>
              </div>
            </div>
          </div>
        </Col>
        <Col offset={2}></Col>
      </Row>
    </div>
  );
};
export default About;
