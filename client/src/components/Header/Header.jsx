import React, { useState, useEffect } from "react";
import { Row, Col, Menu, Dropdown, Input, Button, Badge } from "antd";
import {
  DownOutlined,
  ShoppingCartOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
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
  const cartList = useSelector((state) => state.cart.cartList);
  const currs = ["VNĐ", "USD"];
  const langs = ["Tiếng Việt", "English"];
  const accs = ["My Account", "Log out"];
  const signs = ["Sign In", "Sign Up"];
  const links = ["Signin", "Signup"];
  const [currency, setCurrency] = useState(currs[0]);
  const [language, setLanguage] = useState(langs[0]);
  const [account, setAccount] = useState(accs[0]);
  const [sign, setSign] = useState(signs[0]);
  const [isActive, setMenuIsActive] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token") && token === "") {
      dispatch({
        type: "GET_TOKEN_SUCCESS",
        token: localStorage.getItem("token"),
      });
    }
  }, [token, dispatch]);

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token") || token !== "") {
      dispatch({
        type: "GET_CART",
      });
    }
  }, [token, dispatch]);

  console.log(total);
  useEffect(() => {
    if (localStorage.getItem("token") || token !== "") {
      console.log(cartList);
      const data = cartList
        ? cartList.map((el) => {
            return {
              slug: el.default_spec ? el.default_spec.slug : el.slug,
              quantity: el.number ? el.number : 0,
            };
          })
        : [];
      dispatch({
        type: "UPDATE_CART",
        action: {
          cart: {
            products: data,
          },
        },
      });
    }
  }, [total, cartList, token, dispatch]);

  useEffect(() => {
    if (account === "Log out") {
      dispatch({ type: "LOG_OUT" });
    }
  }, [account, setAccount, dispatch]);

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
    menuIsActive()
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function menuIsActive(e) {
    console.log(isActive);
    setMenuIsActive(!isActive);
  }
  return (
    <Row
      className={styles.header}
      style={{ borderBottom: "0.1px solid #f3f3f4" }}
    >
      <Col
        span={24}
        className={styles["headbar-wrapper"]}
        style={{ borderBottom: "1px solid #dbdbdb" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Row className={styles.headbar}>
            <Col offset={1} span={22}>
              <Row>
                <Col
                  lg={{ span: 10 }}
                  xs={{ span: 24 }}
                  className={styles.hotline}
                  style={{ marginRight: "auto" }}
                >
                  Tel: +84 965 857 082
                </Col>
                <Col
                  lg={{ span: 10 }}
                  xs={{ span: 24 }}
                  className={styles.item}
                  style={{ marginLeft: "auto" }}
                >
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
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={24}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Row>
            <Col offset={1} span={22}>
              <Row gutter={[16, 16]} className={styles.navbar}>
                <Col className={styles.logo}>
                  <Link to="/">
                    <img width="52px" height="52px" src={logo} alt="logo" />
                    <span className={styles.name}>SACHUPHY</span>
                  </Link>
                </Col>
                <Col
                  lg={{ span: 13 }}
                  xs={{ span: 20 }}
                  className={styles["search"]}
                  style={{ margin: "0 auto" }}
                >
                  <Search
                    placeholder="Tìm kiếm sản phẩm ..."
                    allowClear
                    enterButton="Tìm kiếm"
                    size="large"
                    onSearch={onSearch}
                  />
                </Col>
                <Col className={styles.cart}>
                  <Row>
                    <Col className={styles["shop"]}>
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
                    <Col className={styles["shopping"]}>
                      <b>Giỏ hàng</b>
                      <span>{total}</span>
                    </Col>
                  </Row>
                </Col>
                <Col style={{ marginLeft: "auto" }} className={styles.collapse}>
                  <div
                    onClick={() => menuIsActive()}
                    className={styles.checkbtn}
                  >
                    <AlignRightOutlined />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={isActive ? styles.menu : styles["menu-is-active"]}>
            <Col offset={1} span={22}>
              <Row>
                <Col span={24}>
                  <Row gutter={[32, 8]}>
                    <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                      <NavLink
                        exact
                        activeClassName={styles["is-active"]}
                        className={styles["menu-item"]}
                        to="/"
                        onClick={scrollToTop}
                      >
                        TRANG CHỦ
                      </NavLink>
                    </Col>
                    <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                      <NavLink
                        exact
                        activeClassName={styles["is-active"]}
                        className={styles["menu-item"]}
                        to="/product"
                        onClick={scrollToTop}
                      >
                        SẢN PHẨM
                      </NavLink>
                    </Col>
                    <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                      <NavLink
                        exact
                        activeClassName={styles["is-active"]}
                        className={styles["menu-item"]}
                        to="/about"
                        onClick={scrollToTop}
                      >
                        CHÚNG TÔI
                      </NavLink>
                    </Col>
                    <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                      <NavLink
                        exact
                        activeClassName={styles["is-active"]}
                        className={styles["menu-item"]}
                        to="/contact"
                        onClick={scrollToTop}
                      >
                        LIÊN HỆ
                      </NavLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
