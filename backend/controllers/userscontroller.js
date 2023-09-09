const User = require("../models/userSchema");

// @@get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.status(201).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
// @@get user
exports.getUser = async (req, res) => {
  try {
    console.log(req.params.id);

    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",

      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
//Update User
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",

      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//soft Delete for later
//delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success delete user",

      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
//create user
exports.createNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success create user",

      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
