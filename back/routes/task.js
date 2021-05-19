const { Router } = require("express");
const {
  createTaskController,
  getUsersTasksController,
  setTaskCompletedController,
  deleteTaskController,
} = require("../controllers/task");

const router = Router();

router.post("/", createTaskController);
router.get("/", getUsersTasksController);
router.patch("/set-completed/:id", setTaskCompletedController);
router.delete("/:id", deleteTaskController);

module.exports = router;
