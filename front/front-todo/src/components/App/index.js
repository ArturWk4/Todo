import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthForm from "../AuthForm";
import RegistrationForm from "../RegistrationForm";
import ToDo from "../ToDo";
import "bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <h1>Hello</h1>
        </Route>
        <Route exact path="/auth">
          <AuthForm />
        </Route>
        <Route exact path="/registration">
          <RegistrationForm />
        </Route>
        <Route exact path="/todo">
          <ToDo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
