import React from "react";
import AddForm from "../AddForm";
import AppHeader from "../AppHeader";
import ToDoList from "../ToDoList";
import "./style.scss";

const ToDo = () => {
  return (
    <div className="todo-container">
      <AppHeader className="todo-header" />
      <ToDoList />
      <AddForm className="todo-add" />
    </div>
  );
};

export default ToDo;
