const { Router } = require("express");

const {
  loginController,
  registrationController,
  verifyController,
} = require("../controllers/user");
const { userAuthenticate } = require("../services/auth");

const router = Router();

router.post("/login", loginController);
router.post("/verify", userAuthenticate, verifyController);
router.post("/registration", registrationController);

module.exports = router;
