import React from "react";
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
  console.log("data:", data);
  const dataFormatted = data.map((curr, index) => {
    return {
      key: index,
      name: curr.default_spec.slug,
      price: curr.default_spec.price,
      number: 1,
      // number: newData.forEach((element, index) => {
      //   if (element.default_spec.slug === curr.default_spec.slug) {
      //     newData[index].number + 1;
      //     return true;
      //   } else return false;
      // })
      //   ? ""
      //   : 1,
    };
  }, []);
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
      render: () => (
        <InputNumber
          min={1}
          max={100}
          defaultValue={1}
          // onChange={(value) => onChange(value, row.key)}
        />
      ),
    },
    {
      title: "Tổng",
      dataIndex: "price",
      key: "price",
      render: (all) => <p>{all} VNĐ</p>,
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
  dataFormatted.map((el) => {
    all_in = all_in + el.price;
    return 0;
  });

  return (
    <div>
      <Table columns={columns} dataSource={dataFormatted} />
      <h2 style={{ textAlign: "left" }}>Tổng tiền:{all_in} VNĐ</h2>
    </div>
  );
};

export default TableItem;
