import React, { useState } from "react";
import { DatePicker, Input, Flex, Button } from "antd";
import { ForwardOutlined } from "@ant-design/icons";
import TodoItem from "./TodoItem";

const AddTodo = () => {
  const [changeInput, setChangeInput] = useState("");
  let [changeDate, setChangeDate] = useState("");
  const [arr, setArr] = useState([]);
  const obj = {
    key: arr.length,
    todo: changeInput,
    date: changeDate,
    remove: <button className=" btn btn-danger">remove</button>,
  };

  function handleAdd() {
    arr.push(obj);
    setArr([...arr]);
    console.log(arr);
    setChangeInput("");
  }

  const datePickerChange = (date, dateString) => {
    setChangeDate(dateString);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <Input
              size="default"
              placeholder="Enter ToDo Here"
              prefix={<ForwardOutlined />}
              value={changeInput}
              onChange={(e) => setChangeInput(e.target.value)}
            />
          </div>
          <div className="col-4">
            <DatePicker onChange={datePickerChange} />
          </div>
          <div className="col-2">
            <Flex gap="small" wrap="wrap">
              <Button
                type="primary"
                onClick={() => {
                  handleAdd();
                }}
              >
                Add
              </Button>
            </Flex>
          </div>
        </div>
        <TodoItem obj={arr} />
      </div>
    </>
  );
};

export default AddTodo;
