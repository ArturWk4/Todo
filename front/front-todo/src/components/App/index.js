import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AuthForm from "../AuthForm";
import RegistrationForm from "../RegistrationForm";
import ToDo from "../ToDo";
import Spinner from "../Spinner";
import { verifyUser } from "../../services/users";

const App = () => {
  const [isUserVerified, setIsUserVerified] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    verifyUser("Bearer " + user.currentUser?.data?.token)
      .then(() => setIsUserVerified(true))
      .catch(() => setIsUserVerified(false));
  }, [user]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {isUserVerified === undefined ? (
            <Spinner />
          ) : isUserVerified ? (
            <ToDo />
          ) : (
            <AuthForm />
          )}
        </Route>
        <Route exact path="/registration">
          <RegistrationForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
