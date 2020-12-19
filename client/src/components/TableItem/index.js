import React, { useEffect, useState } from "react";
import { Table, InputNumber } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {change} from '../../help/convert'
const styleImage = {
  width: "150px",
  height: "150px",
};
const TableItem = (props) => {
  const dispatch = useDispatch();
  
  const {data, total} = props;
  // const [x, setX] = useState([]);
  // useEffect(() => {
  //   setX(data);
  //   renderer = change(data);
  // },[data,x]);
  // console.log("data:",change(data))
  console.log(data)
  

  useEffect(()=>{
    const cartList = data? data.map(el => {
      return {
        "slug" : el.default_spec?el.default_spec.slug:el.slug,
        "quantity": el.number?el.number:el.quantity,
      }
    }):[];
    dispatch({
      type: "UPDATE_CART",
      action: {
        "cart":{
          "products": cartList,
        }
      }
    })
  }, [data, dispatch])
  
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Ảnh",
      dataIndex: "slug",
      render: (slug, index) => (
        <img
          key={index}
          style={styleImage}
          alt={slug}
          src="https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png"
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price, index) => <p key={index}>{price} VNĐ</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "number",
      key: "number",
      render: (number, row) => (
        <InputNumber
          // key={index}
          value={row.number}
          min={1}
          max={100}
          // defaultValue={ number }
          onChange={(value) => onChange(value, row.price, row.key)}
        />
      ),
    },
    {
      title: "Tổng",
      dataIndex: "total",
      key: "total",
      render: (value, key) => <p key={key}>{value} VNĐ</p>,
    },
    {
      title: "Action",
      render: (row, index) => (
        <CloseCircleOutlined value={1} key={index} onClick={() => handleClick(row.key, row.total)} />
      ),
    },
  ];

  const handleClick = (index, total) => {
    console.log("index", index);
    dispatch({ type: "DELETE", index, total });
  };

  const onChange = (value, price, key) =>{
      console.log(value);
      console.log(data[key]);
      
      // const item = {
      //   default_spec: {
      //     slug:slug
      //   }
      // };
      // if (value < change(data)[key].number)
      //   dispatch({type:"DELETE_ITEM", value:value, item});
      // else
      // dispatch({type:"ADD_ITEM", value:value, item});
      dispatch({type:"CHANGE_NUMBER", value, key, price});
  }

  
  
  return (
    <div>
      <Table columns={columns} dataSource={change(data)} />
      <h2 style={{ textAlign: "left" }}>Tổng tiền:{total} VNĐ</h2>
    </div>
  );
};

export default TableItem;
