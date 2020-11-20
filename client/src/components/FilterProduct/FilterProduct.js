import { Menu } from "antd";
import React from 'react'
import './FilterProduct.css'
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import classnames from 'classnames'

const { SubMenu } = Menu;


// const handleChange = (e) => {
//   console.log(e.key);
// };

const LeftContent = React.forwardRef((props, ref) => {
  var leftContentClasses = classnames({
    'left-content': true,
    'is-anchored-bottom': props.shouldAnchorBottom
  });
  
  return (
    <div ref={ref} className={leftContentClasses}>
      <Menu mode="inline" style={{ borderRight: 0 }}>
        <SubMenu
          key="brand"
          icon={<UserOutlined />}
          // onClick={handleChange}
          title="Hãng sản xuất">
          <Menu.Item key="asus">Asus</Menu.Item>
          <Menu.Item key="dell">Dell</Menu.Item>
          <Menu.Item key="lenovo">Lenovo</Menu.Item>
          <Menu.Item key="msi">Msi</Menu.Item>
        </SubMenu>
      </Menu>
      <Menu mode="inline" style={{ borderRight: 0 }}>
        <SubMenu key="money" icon={<LaptopOutlined />} title="Giá tiền">
          <Menu.Item key="1">1 Tr -- 5Tr</Menu.Item>
          <Menu.Item key="2">5 Tr -- 10Tr</Menu.Item>
          <Menu.Item key="3">10 Tr -- 15Tr</Menu.Item>
          <Menu.Item key="4"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="5"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="6"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="7"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="8"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="9"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="10"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="11"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="12"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="13"> Lớn hơn 15 Tr</Menu.Item>
          <Menu.Item key="14"> Lớn hơn 15 Tr</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
});

export default LeftContent;