import React from "react";
import { Table, InputNumber } from "antd";
// import { CloseCircleOutlined } from "@ant-design/icons";
// import { useDispatch } from "react-redux";
import {change} from '../../help/convert'
const styleImage = {
  width: "150px",
  height: "150px",
};

const TableItem = (props) => {
  // const dispatch = useDispatch();
  
  const {data, total} = props;
  console.log("data:",change(data))
  
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
      render: (number, row, index) => (
        <InputNumber
          key={index}
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
      render: (value, key) => <p key={key}>{value} VNĐ</p>,
    },
    {
      title: "Action",
      dataIndex: "slug",
      key: "slug",
      // render: (row, index) => (
      //   <CloseCircleOutlined value={1} key={index} onClick={() => handleClick(row.key)} />
      // ),
    },
  ];

  // const handleClick = (index) => {
  //   console.log("index", index);
  //   // dispatch({ type: "DELETE_ITEM", index });
  //   // dataFormatted.splice(index, 1);
  // };
//   var all_in = 0;
//   ans.map((el) => {
//     all_in = all_in + el.total;
//     return 0;
//   });
// const [total, SetTotal] = useState(all_in)
// useEffect(() => {
//   dispatch({type:"CHANGE_TOTAL", total})
// },[total])
  const onChange = (value, key) =>{
      console.log(value);
      // ans[key].number = value;
      // ans[key].total = ans[key].price * ans[key].number;
      // let newans = [...ans]
      // setData(newans)
      // ans.map((el) => {
      //   all_in = all_in + el.total;
      //   return 0;
      // });
      // SetTotal(all_in);
      // console.log(newans);
  }

  
  
  return (
    <div>
      <Table columns={columns} dataSource={change(data)} />
      <h2 style={{ textAlign: "left" }}>Tổng tiền:{total} VNĐ</h2>
    </div>
  );
};

export default TableItem;
