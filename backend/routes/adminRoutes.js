const {
adminLogin  } = require("../controllers/adminController");
  const express = require("express");

  const router = express.Router();
  router.route("/").post(adminLogin);
  module.exports = router;
