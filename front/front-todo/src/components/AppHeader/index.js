import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import { logout } from "../../store/user/actions";
import { removeUserDataFromStorage } from "../../services/users";
import { clearTaskList } from "../../store/tasks/actions";

const AppHeader = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    clearTaskList(dispatch);
    removeUserDataFromStorage();
    dispatch(logout());
  };
  return (
    <div className="app-header">
      <h1>Список задач</h1>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default AppHeader;
