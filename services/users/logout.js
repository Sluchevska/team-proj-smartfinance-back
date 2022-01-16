const { User } = require("../../models/user");

const logout = async (id) => {
    await User.findByIdAndUpdate(id, { token: null });
  };

  module.exports = { logout }