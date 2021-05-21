import React, { useState } from "react";
import { Checkbox, Button } from "@material-ui/core";
import "./style.scss";

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
        className=""
        checked={isCompleted}
        color={"default"}
        onChange={handleCompleted}
      />
      <p className="">{title}</p>
      <Button className="delete-btn" color={"secondary"}>
        DEL
      </Button>
    </div>
  );
};

export default ToDoListItem;
