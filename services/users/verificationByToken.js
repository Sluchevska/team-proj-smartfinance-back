const { User } = require("../../models/user");
const { NotFound} = require("http-errors");

const verificationByToken = async (verifyToken) => {
    const user = await User.findOne({ verifyToken });
    if (!user) {
      throw new NotFound("User is verificated or does not exist");
    }
    const result = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { verify: true, verifyToken: null } }
    );
    return result;
  };

  module.exports = { verificationByToken }