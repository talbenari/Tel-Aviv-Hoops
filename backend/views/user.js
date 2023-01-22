const express = require("express");
const router = express.Router();

const {
  CreateUser,
  Login,

} = require("../controllers/userController");

router.post("/signup", CreateUser);
router.post("/login", Login);


module.exports = router;
