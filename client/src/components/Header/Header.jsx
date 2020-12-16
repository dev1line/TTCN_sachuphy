import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Dropdown, Input, Button, Badge } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../logo192.png";
const { Search } = Input;

const Header = (props) => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const currs = ["VNĐ", "USD"];
  const langs = ["Tiếng Việt", "English"];
  const accs = ["My Account", "Log out"];
  const signs = ["Sign In", "Sign Up"];
  const links = ["Signin", "Signup"];
  const [currency, setCurrency] = useState(currs[0]);
  const [language, setLanguage] = useState(langs[0]);
  const [account, setAccount] = useState(accs[0]);
  const [sign, setSign] = useState(signs[0]);
  useEffect(() => {
    if (localStorage.getItem("token") && token === "") {
      dispatch({
        type: "GET_TOKEN_SUCCESS",
        token: localStorage.getItem("token"),
      });
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (account === "Log out") {
      dispatch({ type: "LOG_OUT" });
    }
  }, [account, dispatch]);

  const cartListItem = useSelector((state) => state.cart.cartList);

  if (token) console.log("token header:", token);
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
  const menuSign = (sign = signs, link = links) => (
    <Menu>
      {sign &&
        sign.map((s, index) => (
          <Menu.Item key={s} onClick={() => setSign(s)}>
            <Link exact="true" to={`/${link[index]}`}>
              {s}
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  );
  const onSearch = (value) => console.log(value);
  function scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.header}>
      <div className={styles["headbar-wrapper"]}>
        <Row className={styles.headbar}>
          <Col span={13} className={styles.hotline}>
            Tel: +84 965 857 082
          </Col>
          <Col offset={4}></Col>
          <Col className={styles.item} span={7}>
            <Dropdown
              className={styles.dropdown}
              overlay={menuCurrency}
              trigger={["click"]}
            >
              <div>
                {currency}
                <DownOutlined className={styles.icon} />
              </div>
            </Dropdown>
            <Dropdown
              className={styles.dropdown}
              overlay={menuLanguage}
              trigger={["click"]}
            >
              <div>
                {language}
                <DownOutlined className={styles.icon} />
              </div>
            </Dropdown>
            {token === "" ? (
              <Dropdown
                className={styles.dropdown}
                overlay={menuSign}
                trigger={["click"]}
              >
                <div>
                  {sign}
                  <DownOutlined className={styles.icon} />
                </div>
              </Dropdown>
            ) : (
              <Dropdown
                className={styles.dropdown}
                overlay={menuAccount}
                trigger={["click"]}
              >
                <div>
                  {account}
                  <DownOutlined className={styles.icon} />
                </div>
              </Dropdown>
            )}
          </Col>
        </Row>
      </div>
      <Row className={styles.navbar}>
        <Col span={6} className={styles.logo}>
          <Link to="/">
            <img width="52px" height="52px" src={logo} alt="logo" />
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
        <Col span={3} className={styles["shop"]}>
          <Badge
            count={cartListItem && cartListItem.length}
            style={{ backgroundColor: "#1789FC" }}
          >
            <Button type="primary" className={styles.btn}>
              <Link exact="true" to="/shopcart">
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
              </Link>
            </Button>
          </Badge>
        </Col>
        <Col span={3} className={styles["shopping"]}>
          <b>My trolley</b>
          <span>{total}</span>
        </Col>
      </Row>
      <Row className={styles["menubar-wrapper"]}>
        <Col offset={12}></Col>
        <Col span={11} className={styles["menubar"]}>
          <NavLink
            exact
            activeClassName={styles["is-active"]}
            className={styles["menu-item"]}
            to="/"
            onClick={scrollToTop}
          >
            HOME
          </NavLink>
          <NavLink
            exact
            activeClassName={styles["is-active"]}
            className={styles["menu-item"]}
            to="/product"
            onClick={scrollToTop}
          >
            SHOP
          </NavLink>
          <NavLink
            exact
            activeClassName={styles["is-active"]}
            className={styles["menu-item"]}
            to="/about"
            onClick={scrollToTop}
          >
            ABOUT US
          </NavLink>
          <NavLink
            exact
            activeClassName={styles["is-active"]}
            className={styles["menu-item"]}
            to="/contact"
            onClick={scrollToTop}
          >
            CONTACT US
          </NavLink>
        </Col>
        <Col offset={1}></Col>
      </Row>
    </div>
  );
};

export default Header;
