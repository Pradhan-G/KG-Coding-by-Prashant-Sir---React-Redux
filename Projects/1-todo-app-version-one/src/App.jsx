import React from "react";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
      </center>
    </>
  );
};

export default App;
