import React, { useEffect, useState } from "react";
import { Table, InputNumber } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
const styleImage = {
  width: "150px",
  height: "150px",
};

const TableItem = (props) => {
  const dispatch = useDispatch();
  
  const data = props.data;
  // console.log("data:", data);
  const dataFormatted = data.map((curr, index) => {
    return {
      key: index,
      name: curr.default_spec.slug,
      price: curr.default_spec.price,
      number: 1,
      total: curr.default_spec.price,
    };
  }, []);
  console.log(dataFormatted);
  let ans = [];
  let isExist = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i].name === x.name)
      {
        arr[i].number ++;
        arr[i].total *= arr[i].number;
        console.log(arr[i].number);
        return true;
      } 
    }
    
    return false;
  }
  dataFormatted.map((el, index) => {
    if(!isExist(ans, el)) ans.push(el);
    return 0;
  })
  const [Data, setData] = useState(ans);
  
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Ảnh",
      dataIndex: "slug",
      render: (slug) => (
        <img
          style={styleImage}
          alt={slug}
          src="https://fptshop.com.vn/Uploads/Originals/2020/6/2/637266923420476975_hp-15s-fq-bac-1.png"
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>{price} VNĐ</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "number",
      key: "number",
      render: (number, row) => (
        <InputNumber
          min={1}
          max={100}
          defaultValue={ number }
          onChange={(value) => onChange(value, row.key)}
        />
      ),
    },
    {
      title: "Tổng",
      dataIndex: "total",
      key: "total",
      render: (value) => <p>{value} VNĐ</p>,
    },
    {
      title: "Action",
      dataIndex: "x",
      key: "x",
      render: (index) => (
        <CloseCircleOutlined onClick={(index) => handleClick(index)} />
      ),
    },
  ];

  const handleClick = (index) => {
    console.log("index", index);
    dispatch({ type: "DELETE_ITEM", index });
    // dataFormatted.splice(index, 1);
  };
  var all_in = 0;
  ans.map((el) => {
    all_in = all_in + el.total;
    return 0;
  });
const [total, SetTotal] = useState(all_in)

  const onChange = (value, key) =>{
      console.log(value);
      ans[key].number = value;
      ans[key].total = ans[key].price * ans[key].number;
      let newans = [...ans]
      setData(newans)
      ans.map((el) => {
        all_in = all_in + el.total;
        return 0;
      });
      SetTotal(all_in);
      // console.log(newans);
  }

  
  
  return (
    <div>
      <Table columns={columns} dataSource={Data} />
      <h2 style={{ textAlign: "left" }}>Tổng tiền:{total} VNĐ</h2>
    </div>
  );
};

export default TableItem;
