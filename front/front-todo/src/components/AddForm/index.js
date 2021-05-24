import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import "./style.scss";

const priorities = [
  {
    value: 1,
    label: "Высокий",
  },
  {
    value: 2,
    label: "Средний",
  },
  {
    value: 3,
    label: "Низкий",
  },
];

const AddForm = () => {
  const [priority, setPriority] = useState(3);
  const [taskTitle, setTaskTitle] = useState("");

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };
  const handleAddTask = () => {
    console.log(`${taskTitle} ${priority}`);
    // TODO: dispatch add task
  };

  return (
    <form noValidate autoComplete="off" className="add-form">
      <TextField
        className="task-input"
        label="Новая задача"
        inputProps={{ "aria-label": "description" }}
        variant="outlined"
        onChange={(event) => handleTitleChange(event)}
      />
      <TextField
        id="standard-select-currency"
        select
        label="Приоритет"
        value={priority}
        onChange={(event) => handlePriorityChange(event)}
      >
        {priorities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить
      </Button>
    </form>
  );
};

export default AddForm;
