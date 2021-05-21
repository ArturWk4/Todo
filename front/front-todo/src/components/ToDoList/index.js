import React from "react";
import ToDoListItem from "../ToDoListItem";

const todoData = [
  {
    id: 1,
    title: "Do something",
    completed: false,
    userId: 1,
    priorityId: 1,
  },
  {
    id: 2,
    title: "Do somthing else",
    completed: false,
    userId: 1,
    priorityId: 2,
  },
  {
    id: 3,
    title: "Do somthing else",
    completed: true,
    userId: 1,
    priorityId: 2,
  },
];

const ToDoList = () => {
  return todoData.map((item) => (
    <ToDoListItem key={item.id} className="todo-list-container" {...item} />
  ));
};

export default ToDoList;
