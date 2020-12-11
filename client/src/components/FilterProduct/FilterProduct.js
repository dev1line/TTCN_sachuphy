import React, { useState } from "react";
import "./FilterProduct.css";
import { Menu, Slider, Row, Col } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { useDispatch } from "react-redux";

const { SubMenu } = Menu;

const FilterProduct = React.forwardRef((props, ref) => {
  const [rangePrice, setRangePrice] = useState([0, 100]);
  const [nameProduct, setNameProduct] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNameProduct(e.key);
    dispatch({ type: "FILTER_PRODUCT", filterByName: e.key, filterByPrice: rangePrice });
  };
  var leftContentClasses = classnames({
    "left-content": true,
    "is-anchored-bottom": props.shouldAnchorBottom,
  });
  function onChange(value) {
    setRangePrice(value);
    dispatch({ type: "FILTER_PRODUCT",  filterByName: nameProduct, filterByPrice: value });
  }
  

  return (
    <div ref={ref} className={leftContentClasses}>
      <Menu mode="inline" style={{ borderRight: 0 }} defaultSelectedKeys={['All']} defaultOpenKeys={['brand']}>
        <SubMenu
          key="brand"
          icon={<UserOutlined />}
          onClick={handleChange}
          title="Hãng sản xuất">
          <Menu.Item key="All">
            Tất cả sản phẩm
          </Menu.Item>
          <Menu.Item key="Asus">
            Asus
          </Menu.Item>
          <Menu.Item key="Dell">
            Dell
          </Menu.Item>
          <Menu.Item key="Lenovo">
            Lenovo
          </Menu.Item>
          <Menu.Item key="MSI">
            MSI
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Row gutter={[0, 10]} style={{ marginTop: "20px" }}>
        <Col span={2} style={{marginLeft:'24px'}}>
          <LaptopOutlined />
        </Col>
        <Col offset={1}>Giá tiền</Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <Slider
            range
            step={5}
            defaultValue={[0, 100]}
            onChange={onChange}
            // onAfterChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col offset={2}>
          {rangePrice[0]} Tr
        </Col>
        <Col offset={12}>
        {rangePrice[1]} Tr
        </Col>
      </Row>
      {/* <Menu mode="inline" style={{ borderRight: 0 }}>
      </Menu> */}
      {/* <SubMenu key="money" icon={<LaptopOutlined />} title="Giá tiền">
          
          <Menu.Item onClick={handleChange} key1="1">
            1 Tr -- 5Tr
          </Menu.Item>
          <Menu.Item onClick={handleChange} key1="2">
            5 Tr -- 10Tr
          </Menu.Item>
          <Menu.Item onClick={handleChange} key1="3">
            10 Tr -- 15Tr
          </Menu.Item>
          <Menu.Item onClick={handleChange} key1="4">
            Lớn hơn 15 Tr
          </Menu.Item>
        </SubMenu> */}
    </div>
  );
});

export default FilterProduct;
