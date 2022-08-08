const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "All Users",
  });
};

const getOneUser = (req, res) => {
  res.status(200).json({
    message: "Get One User",
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    message: "user is created",
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "user is updated",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "user is delete",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
