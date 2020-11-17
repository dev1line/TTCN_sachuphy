import React, { useState } from "react";
import {
  Row,
  Col,
  Menu,
  Dropdown,
  Image,
  Input,
  Typography,
  Button,
  Badge,
} from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";
const { Paragraph } = Typography;
const { Search } = Input;

const Header = (props) => {
  const currs = ["VNĐ", "USD"]
  const langs = ["Tiếng Việt", "English"]
  const accs = ["My Account", "Log out"]
  const [currency, setCurrency] = useState(currs[0]);
  const [language, setLanguage] = useState(langs[0]);
  const [account, setAccount] = useState(accs[0]);
  const menuCurrency = (curr = currs) => (
    <Menu>
      {curr &&
        curr.map((c) => {
          return (
            <Menu.Item key={c} onClick={() => setCurrency(c)}>
              {c}
            </Menu.Item>
          )
        })}
    </Menu>
  );
  const menuLanguage = (lang = langs) => (
    <Menu>
      {lang &&
        lang.map((l) => (
          <Menu.Item key={l} onClick={() => setLanguage(l)}>
            {l}
          </Menu.Item>
        ))}
    </Menu>
  );

  const menuAccount = (acc = accs) => (
    <Menu>
      {acc &&
        acc.map((a) => (
          <Menu.Item key={a} onClick={() => setAccount(a)}>
            {a}
          </Menu.Item>
        ))}
    </Menu>
  );

  const onSearch = (value) => console.log(value);

  return (
    <div className="header">
      <Row className="headbar">
        <Col offset={1}></Col>
        <Col span={12}>
          <Typography>Tel: +84 965 857 082</Typography>
        </Col>
        <Col offset={1}></Col>
        <Col className="item" span={3}>
          <Dropdown overlay={menuCurrency} trigger={["click"]}>
            <div>
              {currency}
              <DownOutlined/>
            </div>
          </Dropdown>
        </Col>
        <Col className="item" span={3}>
          <Dropdown overlay={menuLanguage} trigger={["click"]}>
            <div>
              {language}
              <DownOutlined/>
            </div>
          </Dropdown>
        </Col>
        <Col className="item" span={3}>
          <Dropdown overlay={menuAccount} trigger={["click"]}>
            <div>
              {account}
              <DownOutlined/>
            </div>
          </Dropdown>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row style={{ margin: "30px 0" }}>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(-40px,0)",
          }}>
          <Image
            src="./logo192.png"
            style={{ maxHeight: 100, maxWidth: 100 }}
          />
          <Typography
            style={{
              fontSize: "48px",
              fontWeight: "Bold",
              transform: "translate(5px,20px)",
            }}>
            SACHUPHY
          </Typography>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Search
            placeholder="What are you looking for ..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col
          span={4}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Badge
            count={4}
            style={{ border: "none", backgroundColor: "#1789FC" }}>
            <Button
              style={{
                backgroundColor: "#1789FC",
                height: 60,
                width: 60,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />
            </Button>
          </Badge>

          <Typography
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 0 0 20px",
            }}>
            <Paragraph style={{ margin: 0 }}>My trolley</Paragraph>
            <Paragraph style={{ margin: 0 }}>$200.00</Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        <Col
          style={{
            margin: "20px 0 20px 20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
          }}>
          <Paragraph style={{ flex: 1, marginLeft: 8, fontSize: "24px" }}>
            HOME
          </Paragraph>
          <Paragraph style={{ flex: 1, marginLeft: 8, fontSize: "24px" }}>
            SHOP
          </Paragraph>
          <Paragraph style={{ flex: 1, marginLeft: 8, fontSize: "24px" }}>
            ABOUT US
          </Paragraph>
          <Paragraph
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: "24px",
              marginRight: 100,
            }}>
            CONTACT US
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
