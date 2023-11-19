import { Table } from "antd";
import React from "react";

const TodoItem = ({ obj }) => {
  // const dataSource = [
  //   {
  //     // key: "0",
  //     todo: "Mike",
  //     date: 32,
  //     remove: <button className=" btn btn-danger">remove</button>,
  //   },
  //   {
  //     // key: "1",
  //     todo: "John",
  //     date: 42,
  //     remove: <button className=" btn btn-danger">remove</button>,
  //   },
  // ];
  const dataSource = obj;
  const columns = [
    {
      title: "Todo",
      dataIndex: "todo",
      key: "todo",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Remove",
      dataIndex: "remove",
      key: "todo",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default TodoItem;
