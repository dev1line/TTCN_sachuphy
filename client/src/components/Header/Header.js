import React, { useState } from "react";
import { Row, Col, Menu, Dropdown, Image, Input, Button, Badge } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import "antd/dist/antd.css";
import "./style.css";
const { Search } = Input;

const Header = (props) => {
  const currs = ["VNĐ", "USD"];
  const langs = ["Tiếng Việt", "English"];
  const accs = ["My Account", "Log out"];
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
          );
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
        <Col span={12} className="hotline">
          Tel: +84 965 857 082
        </Col>
        <Col offset={4}></Col>
        <Col className="item" span={6}>
          <Dropdown overlay={menuCurrency} trigger={["click"]}>
            <div>
              {currency}
              <DownOutlined />
            </div>
          </Dropdown>
          <Dropdown overlay={menuLanguage} trigger={["click"]}>
            <div>
              {language}
              <DownOutlined />
            </div>
          </Dropdown>
          <Dropdown overlay={menuAccount} trigger={["click"]}>
            <div>
              {account}
              <DownOutlined />
            </div>
          </Dropdown>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row className="navbar">
        <Col offset={1}></Col>
        <Col span={1} className="logo">
          <Image width="60px" height="60px" src="./logo192.png" alt="logo" />
        </Col>
        <Col span={5} className="name">
          <span>SACHUPHY</span>
        </Col>
        <Col span={12} className="search">
          <Search
            placeholder="What are you looking for ..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col span={2} className="shop">
          <Badge count={4} style={{ backgroundColor: "#1789FC" }}>
            <Button type="primary" className="btn">
              <ShoppingCartOutlined style={{ fontSize: 28 }} />
            </Button>
          </Badge>
        </Col>
        <Col span={2} className="shoping">
          <b>My trolley</b>
          <span>$200.00</span>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row>
        <Col offset={12}></Col>
        <Col span={12} className="menubar">
          <Link className="menu-item is-active" to="/">HOME</Link>
          <Link className="menu-item" to="/product">SHOP</Link>
          <Link className="menu-item" to="/about">ABOUT US</Link>
          <Link className="menu-item" to="/product">CONTACT US</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
