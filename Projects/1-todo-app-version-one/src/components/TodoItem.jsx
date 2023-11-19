import { Table } from "antd";
import React from "react";

const dataSource = [
  {
    key: "1",
    todo: "Mike",
    date: 32,
    remove: <button className=" btn btn-danger">remove</button>,
  },
  {
    key: "2",
    todo: "John",
    date: 42,
    remove: <button className=" btn btn-danger">remove</button>,
  },
];

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

const TodoItem = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default TodoItem;
