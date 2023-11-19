import React from "react";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem />
      </center>
    </>
  );
};

export default App;
