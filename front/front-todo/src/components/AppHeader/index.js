import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { logout } from "../../store/user/actions";
import { removeUserDataFromStorage } from "../../services/users";
import { clearTaskList } from "../../store/tasks/actions";

const AppHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const handleLogout = () => {
    clearTaskList(dispatch);
    removeUserDataFromStorage();
    dispatch(logout());
  };
  return (
    <div className="app-header">
      <div>
        <h3>Здравствуйте {user.data?.data.name} вот ваш</h3>
        <h1>Список задач</h1>
      </div>

      <Button variant="contained" color="primary" style={{maxHeight: "50px"}} onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default AppHeader;
