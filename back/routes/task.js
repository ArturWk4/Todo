const { Router } = require("express");
const {
  createTaskController,
  getUsersTasksController,
  setTaskCompletedController,
  deleteTaskController,
} = require("../controllers/task");
const { userAuthenticate } = require("../services/auth");

const router = Router();

router.post("/", userAuthenticate, createTaskController);
router.get("/", userAuthenticate, getUsersTasksController);
router.patch(
  "/set-completed/:id",
  userAuthenticate,
  setTaskCompletedController
);
router.delete("/:id", userAuthenticate, deleteTaskController);

module.exports = router;
