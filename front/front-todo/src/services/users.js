import server from "./server";

export const authenticateRequest = (username, password) =>
  server.post("/user/login", { username, password });

export const registration = (name, username, password) =>
  server.post("/user/registration", { name, username, password });

export const storeUserData = (currentUser) =>
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

export const removeUserDataFromStorage = () =>
  localStorage.removeItem("currentUser");

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));
