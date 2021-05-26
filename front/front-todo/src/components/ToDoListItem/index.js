import React, { useState } from "react";
import { Checkbox, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks/actions";
import "./style.scss";

const ToDoListItem = ({ id, title, completed, priorityId }) => {
  const [isCompleted, setCompleted] = useState(completed);
  const dispatch = useDispatch();
  const handleCompleted = (event) => {
    setCompleted(event.target.checked);
    
  };
  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className={`todo-item ${
        isCompleted ? "completedTask" : ""
      } priority-${priorityId}`}
    >
      <Checkbox
        checked={isCompleted}
        color={"default"}
        onChange={handleCompleted}
      />
      <p>{title}</p>
      <Button
        className="delete-btn"
        color={"secondary"}
        onClick={handleDeleteTask}
      >
        DEL
      </Button>
    </div>
  );
};

export default ToDoListItem;
