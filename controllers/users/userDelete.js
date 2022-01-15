const { Unauthorized } = require("http-errors");
const { deleteUser } = require('../../services/users')

const userDelete = async (req, res) => {
    const { userId } = req.params;
    const { id } = req.user;
    if (userId !== id) {
      throw new Unauthorized("User is not authorized");
    }
    const result = await deleteUser(userId);
    res.json({
      status: "success",
      code: 200,
      message: "User deleted",
    });
  };

  module.exports = { userDelete }