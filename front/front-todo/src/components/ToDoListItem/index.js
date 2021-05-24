import React, { useState } from "react";
import { Checkbox, Button } from "@material-ui/core";
import "./style.scss";
// TODO: Добавить нормальную логику работы с данными
const ToDoListItem = ({ id, title, completed, priorityId }) => {
  const [isCompleted, setCompleted] = useState(completed);
  const handleCompleted = (event) => {
    setCompleted(event.target.checked);
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
      <Button className="delete-btn" color={"secondary"}>
        DEL
      </Button>
    </div>
  );
};

export default ToDoListItem;