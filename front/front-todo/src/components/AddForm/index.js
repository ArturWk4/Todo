import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/tasks/actions";
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
  const [priorityInput, setPriorityInput] = useState(3);
  const [taskTitleInput, setTaskTitleInput] = useState("");
  const dispatch = useDispatch();
  const handlePriorityChange = (event) => {
    setPriorityInput(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTaskTitleInput(event.target.value);
  };
  const handleAddTask = (e) => {
    dispatch(addTask({ title: taskTitleInput, priorityId: priorityInput }));
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
        value={priorityInput}
        onChange={(event) => handlePriorityChange(event)}
      >
        {priorities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={(e) => handleAddTask(e)}
      >
        Добавить
      </Button>
    </form>
  );
};

export default AddForm;
