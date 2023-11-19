import React, { useState } from "react";
import { DatePicker, Input, Flex, Button } from "antd";
import { ForwardOutlined } from "@ant-design/icons";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const AddTodo = () => {
  const [change, setChange] = useState("");
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <Input
              size="default"
              placeholder="Enter ToDo Here"
              prefix={<ForwardOutlined />}
              value={change}
              onChange={(e) => setChange(e.target.value)}
            />
          </div>
          <div className="col-4">
            <DatePicker onChange={onChange} />
          </div>
          <div className="col-2">
            <Flex gap="small" wrap="wrap">
              <Button type="primary">Add</Button>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
