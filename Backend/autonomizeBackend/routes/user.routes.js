const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/save-user/:username", controller.UserData);

router.get("/mutual-friends/:username", controller.findFollowers);

router.get("/search-users", controller.searchUsers);

router.delete("/delete-user/:username", controller.DeleteUser);

router.patch("/update-user/:username", controller.updateUserData);

router.get("/users", controller.getUsersSorted);

module.exports = router;
