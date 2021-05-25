import server from "./server";

export const createTask = (task, Authorization) =>
  server.post("/tasks", task, {
    headers: { Authorization },
  });

export const getTasks = (Authorization) =>
  server.get("/tasks", {
    headers: { Authorization },
  });

export const completeTask = (taskId, Authorization) =>
  server.patch(`/tasks/set-completed/${taskId}`, {
    headers: { Authorization },
  });

export const removeTask = (taskId, Authorization) =>
  server.delete(`/tasks/${taskId}`, { headers: { Authorization } });
