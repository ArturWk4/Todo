import React, { useEffect, useState } from "react";
import ToDoListItem from "../ToDoListItem";
import { useSelector, useDispatch } from "react-redux";
import { setTasksList } from "../../store/tasks/actions";
import Spinner from "../Spinner";


const ToDoList = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const tasksList = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasksList()).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return isLoaded ? (
    tasksList.map((item) => (
      <ToDoListItem key={item.id} className="todo-list-container" {...item} />
    ))
  ) : (
    <Spinner />
  );
};

export default ToDoList;
