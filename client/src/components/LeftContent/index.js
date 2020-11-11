import {  Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


export const LeftContent = (props) => {

    const handleChange = e =>{
        console.log(e.key)
    }
    return (
        <div>
            <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="brand" icon={<UserOutlined />} onClick={handleChange} title="Hãng sản xuất">
            <Menu.Item key="asus">Asus</Menu.Item>
            <Menu.Item key="dell">Dell</Menu.Item>
            <Menu.Item key="lenovo">Lenovo</Menu.Item>
            <Menu.Item key="msi">Msi</Menu.Item>
          </SubMenu>
          </Menu>
          <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          >
          <SubMenu key="money" icon={<LaptopOutlined />} title="Giá tiền">
            <Menu.Item key="1">1 Tr -- 5Tr</Menu.Item>
            <Menu.Item key="2">5 Tr -- 10Tr</Menu.Item>
            <Menu.Item key="3">10 Tr -- 15Tr</Menu.Item>
            <Menu.Item key="4"> Lớn hơn 15 Tr</Menu.Item>
          </SubMenu>
          </Menu>
        </div>

    );
}