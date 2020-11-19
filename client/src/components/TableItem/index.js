import React, { useState} from "react"
import { Table, InputNumber } from "antd"
import { CloseCircleOutlined } from "@ant-design/icons"

const styleImage = {
    width: "150px",
    height: "150px"
}



const TableItem = (props) =>{
    var data = props.data;

    const [Items, setItem] = useState(data);



    const columns = [
      {
        dataIndex: 'key',
        key: 'key',
      },
      {
    
        title: 'Ảnh',
        dataIndex: 'image',
        key: 'image',
        render: theImage => <img style={styleImage} alt={theImage} src={theImage}/>,
      },
      {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Giá',
        dataIndex: 'price',
        key: 'price',
        render: price => <p>{price} VNĐ</p>
      },
      {
          title: 'Số lượng',
          dataIndex: 'sl',
          key: 'sl',
          render: (theNumber, row) => <InputNumber min={1} max={100} defaultValue={theNumber} onChange={(value)=>onChange(value, row.key)}/>,
      },
      {
          title: 'Tổng',
          dataIndex: 'all',
          key: 'all',
          render: all => <p>{all} VNĐ</p>
      },
      {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (row) => <CloseCircleOutlined onClick={()=>onClick(row.key)} />,
      },
    ];
    

    const onChange = (value, id) => {
      console.log('changed'+ value+ "in"+ id);
      data[id-1].sl=value;
      console.log(data[id-1].all);
      data[id-1].all=data[id-1].sl * data[id-1].price;
      const newData = [...data];
      setItem(newData);
  }

    const onClick = (e) =>{
      console.log(e);
      data.pop(e-1);
      const newData = [...data];
      setItem(newData);
    }

    var all_in = 0;
    Items.map(el =>{
      all_in = all_in+el.all;
      return 0;
    });
    
    return(
      <div>
        <Table
            columns={columns}
            dataSource={Items}
        />
        <h2 style={{textAlign:"left"}}>Tổng tiền: {all_in} VNĐ</h2>
      </div>
    );
}

export default TableItem;