import React from "react";
import AddForm from "../AddForm";
import AppHeader from "../AppHeader";
import ToDoList from "../ToDoList";

const ToDo = () => {
  return (
    <>
      <AppHeader />
      <ToDoList />
      <AddForm />
    </>
  );
};

export default ToDo;
