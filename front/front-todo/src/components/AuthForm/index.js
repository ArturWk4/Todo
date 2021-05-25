import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";
import { storeUserData } from "../../services/users";
import "./styles.js";

const AuthForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {
    dispatch(login(username, password));
  };
  useEffect(() => {
    storeUserData(currentUser);
  }, [currentUser]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Войти
          </Button>
          <Grid container>
            <Link href="http://localhost:3000/registration" variant="body2">
              {"У вас нет аккаунта? Создайте!"}
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default AuthForm;
