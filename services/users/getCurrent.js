const { User } = require("../../models/user");

const getCurrent = async (_id) => {
    const user = await User.findById(_id);
    return user;
  };

  module.exports = { getCurrent }