const express = require("express");
const router = express.Router();

const {
  CreateUser,
  Login,
  // AddToFavorites,
  // Favorites,
} = require("../controllers/userController");

router.post("/signup", CreateUser);
router.post("/login", Login);
// router.post("/addtofavorites", AddToFavorites);
// router.post("/favorites", Favorites);

module.exports = router;
