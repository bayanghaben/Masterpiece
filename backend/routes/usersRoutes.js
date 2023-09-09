const {
  getAllUsers,
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userscontroller");
const express = require("express");

const router = express.Router();
router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
