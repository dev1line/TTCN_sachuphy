import React from 'react'
import { Carousel } from 'antd';

const style = {
    width:"100%",
    height: "auto",
    // display: "block",
    // marginLeft: "auto",
    // marginRight: "auto",
}

const CarouselImage = (props) => {
    return (
        <Carousel autoplay>
            <div>
                <img alt="" src = "https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" style={style}/>
            </div>
            <div>
                <img alt="" src = "https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" style={style}/> 
            </div>
            <div>
                <img alt="" src = "https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" style={style}/>
            </div>
            <div>
                <img alt="" src = "https://cdn.tgdd.vn/2020/11/banner/reno4-800-300-800x300-2.png" style={style}/>
            </div>
        </Carousel>

    );
}

export default CarouselImage;