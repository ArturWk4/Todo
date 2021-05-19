const { Router } = require("express");

const {
  loginController,
  registrationController,
} = require("../controllers/user");

const router = Router();

router.post("/login", loginController);
router.post("/registration", registrationController);

module.exports = router;
