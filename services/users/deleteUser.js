const { User } = require("../../models/user");
const { NotFound } = require("http-errors");

const deleteUser = async (userId) => {
    const result = await User.findOneAndDelete({ _id: userId });
    if (!result) {
      throw new NotFound("User not found");
    }
    return result;
  };

  module.exports = { deleteUser }