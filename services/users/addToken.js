const { User } = require("../../models/user");

const addToken = async (email, token) => {
    const result = await User.findOneAndUpdate({ email }, { token });
    return result;
  };

  module.exports = { addToken }