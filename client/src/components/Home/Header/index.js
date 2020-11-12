import React, {useState} from 'react';
import { Row, Col, Menu, Dropdown, Image, Input, Typography, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
// import Paragraph from 'antd/lib/skeleton/Paragraph';
const {Search} = Input;
const { Title, Paragraph, Text, Link } = Typography;

const Header = (props) => {
    
    const curr = ["VNĐ","USD"];
    const lang = ["Tiếng Việt", "English"];
    const acc = ["My profile", "Log out"];
    const [currency, setCurrency] = useState(curr[0]);
    const [language, setLanguage] = useState(lang[0]);
    const [account, setAccount] = useState(acc[0]);

    const menuCurrency = (curr) => (
        <Menu>
           {curr && curr.map((c, index) => {
               return  <Menu.Item key={index} onClick={setCurrency(c)}>
                            {c}
                        </Menu.Item>
           })};
        </Menu>
    )
    const menuLanguage = (lang) => (
        <Menu>
            {lang && lang.map((l, index) => (
                    <Menu.Item key={index} onClick={setLanguage(l)}>
                        {l}
                    </Menu.Item>
            ))};
        </Menu>
    );

    const menuAccount = (acc) => (
        <Menu>
            { acc && acc.map((a, index) => (
                    <Menu.Item key={index} onClick={setAccount(a)}>
                        {a}
                    </Menu.Item>
            ))}
        </Menu>
    )
      
    const onSearch = value => console.log(value);

    return (
        <>
        <Row style={{backgroundColor:"gray", display:'flex', justifyContent:"space-between"}}>
            <Col>
                {/* <Contact/> */}
                Tel: 0965 857 082
            </Col>
            <Col style={{display:"flex", justifyContent:'center', flexDirection:'row'}}>
                
                <Dropdown overlay={menuCurrency}>
                    <Row>
                    {currency} <DownOutlined />
                    </Row>
                </Dropdown>        
            
                <Dropdown overlay={menuLanguage}>
                <Row>
                {language} <DownOutlined />
                </Row>
                </Dropdown>       
            
                <Dropdown overlay={menuAccount}>
                <Row>
                {account} <DownOutlined />
                </Row>
                </Dropdown>       
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Image src="./logo192.png" />
                <Typography>
                    <Paragraph>
                        Sachuphy
                    </Paragraph>
                </Typography>
            </Col>
            <Col span={12}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Col>
            <Col span={4}>

            </Col>
        </Row>
        <Row>
            <Col>
                <Button>HOME</Button>
                <Button>SHOP</Button>
                <Button>ABOUT US</Button>
                <Button>CONTACT US</Button>
            </Col>
        </Row>
        </>
    );
}

export default Header;