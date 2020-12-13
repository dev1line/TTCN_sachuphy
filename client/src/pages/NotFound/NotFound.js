import React from "react";
import { Row } from "antd";
import "./styles.css";

const NotFound = (props) => {
    return(
        <div>
            <Row className= "error_container">
                <img src="https://deo.shopeemobile.com/shopee/shopee-mall-live/images/ic_no_404@2x.png" alt=""/>
                <h1>404</h1>
                <p>It looks like something is missing!</p>
            </Row>
        </div>
    )
}


export default NotFound;