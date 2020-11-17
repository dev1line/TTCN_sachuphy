import React from 'react'
import { Row, Col } from 'antd'
import { LeftContent } from '../components/LeftContent'
import { RightContent, ListItem } from '../components/RightContent'
import { MapShow } from '../components/Map'

const Product = (props) => {
    return (
        <Row style={{marginTop:"10px"}}>
            <Col span ={4}>
                <LeftContent></LeftContent>
            </Col>
            <Col span ={20}>
                <Col  style={{marginLeft:"30px", marginRight: "30px"}}>
                    <RightContent></RightContent>
                    <ListItem></ListItem>
                </Col >
                <Col style={{marginLeft:"30px", marginRight: "30px"}}>
                    <MapShow></MapShow>
                </Col>
            </Col>
        </Row>
    );
}

export default Product;