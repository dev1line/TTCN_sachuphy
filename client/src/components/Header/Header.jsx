import React, { useState } from "react";
import { Row, Col, Menu, Dropdown, Input, Button, Badge } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import styles from './styles.module.css'
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
    <div className={styles.header}>
      <Row className={styles.headbar}>
        <Col offset={1}></Col>
        <Col span={12} className={styles.hotline}>
          Tel: +84 965 857 082
        </Col>
        <Col offset={4}></Col>
        <Col className={styles.item} span={6}>
          <Dropdown className={styles.dropdown} overlay={menuCurrency} trigger={["click"]}>
            <div>
              {currency}
              <DownOutlined className={styles.icon} />
            </div>
          </Dropdown>
          <Dropdown className={styles.dropdown} overlay={menuLanguage} trigger={["click"]}>
            <div>
              {language}
              <DownOutlined className={styles.icon} />
            </div>
          </Dropdown>
          <Dropdown className={styles.dropdown} overlay={menuAccount} trigger={["click"]}>
            <div>
              {account}
              <DownOutlined className={styles.icon} />
            </div>
          </Dropdown>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row className={styles.navbar}>
        <Col offset={1}></Col>
        <Col span={6} className={styles.logo}>
          <Link to="/">
            <img width="60px" height="60px" src="./logo192.png" alt="logo" />
            <span className={styles.name}>SACHUPHY</span>
          </Link>
        </Col>
        <Col span={12} className={styles["search"]}>
          <Search
            placeholder="What are you looking for ..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col span={2} className={styles["shop"]}>
          <Badge count={1} style={{ backgroundColor: "#1789FC" }}>
            <Button type="primary" className={styles.btn}>
              <ShoppingCartOutlined style={{ fontSize: 28 }} />
            </Button>
          </Badge>
        </Col>
        <Col span={2} className={styles["shopping"]}>
          <b>My trolley</b>
          <span>$200.00</span>
        </Col>
        <Col offset={1}></Col>
      </Row>
      <Row>
        <Col offset={12}></Col>
        <Col span={11} className={styles["menubar"]}>
          <NavLink exact activeClassName={styles["is-active"]} className={styles["menu-item"]} to="/">
            HOME
          </NavLink>
          <NavLink exact activeClassName={styles["is-active"]} className={styles["menu-item"]} to="/product">
            SHOP
          </NavLink>
          <NavLink exact activeClassName={styles["is-active"]} className={styles["menu-item"]} to="/about">
            ABOUT US
          </NavLink>
          <NavLink exact activeClassName={styles["is-active"]} className={styles["menu-item"]} to="/contact">
            CONTACT US
          </NavLink>
        </Col>
        <Col offset={1}></Col>
      </Row>
    </div>
  );
};

export default Header;
