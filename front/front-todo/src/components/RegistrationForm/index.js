import React, { useEffect, useState } from "react";
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { login } from "../../store/user/actions";
import { registrationRequest, storeUserData } from "../../services/users";

const RegistrationForm = () => {
  const classes = useStyles();
  const [isRegistrationFinished, setIsRegistrationFinished] = useState(false);
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleInputChange = (setter, event) => {
    setter(event.target.value);
  };
  const handleRegistration = () => {
    registrationRequest(name, username, password)
      .then(() => {
        dispatch(login(username, password));
      })
      .then(() => setIsRegistrationFinished(true))
      .catch((err) => console.err("STMH WRONG: ", err));
  };
  useEffect(() => {
    storeUserData(currentUser);
  }, [currentUser]);

  return (
    <>
      {isRegistrationFinished ? (
        <Redirect to="/" />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Ваше имя"
                    autoFocus
                    onChange={(event) => handleInputChange(setName, event)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email адрес"
                    name="email"
                    autoComplete="email"
                    onChange={(event) => handleInputChange(setUsername, event)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(event) => handleInputChange(setPassword, event)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleRegistration}
              >
                Создать аккаунт
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="http://localhost:3000/" variant="body2">
                    Уже есть аккаунт? Войдите!
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};

export default RegistrationForm;
