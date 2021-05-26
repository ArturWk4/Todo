import server from "./server";

export const createTask = (task, Authorization) =>
  server.post("/tasks", task, {
    headers: { Authorization },
  });

export const getTasks = (Authorization) =>
  server.get("/tasks", {
    headers: { Authorization },
  });

export const completeTask = (taskId, completed, Authorization) => {
  console.log(completed, taskId);
  return server.patch(
    `/tasks/set-completed/${taskId}`,
    { completed },
    {
      headers: { Authorization },
    }
  );
};

export const removeTask = (taskId, Authorization) =>
  server.delete(`/tasks/${taskId}`, { headers: { Authorization } });
