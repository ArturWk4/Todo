import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
import { useSelector, useDispatch } from "react-redux";
import { setTasksList } from "../../store/tasks/actions";
import Spinner from "../Spinner";

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
  const [isLoaded, setIsLoaded] = useState(true);
  const tasksList = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasksList()).then(() => {
      setIsLoaded(true);
      console.log("2");
    });
  }, []);

  console.log("1");
  return isLoaded ? (
    tasksList.map((item) => (
      <ToDoListItem key={item.id} className="todo-list-container" {...item} />
    ))
  ) : (
    <Spinner />
  );
};

export default ToDoList;
