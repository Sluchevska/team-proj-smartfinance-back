const { User } = require("../../models/user");
const { NotFound, BadRequest } = require("http-errors");
const { sendEmail } = require("../../helpers");

const userSendEmailAgain = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFound("User not found");
    }
    if (user.verify || !user.verifyToken) {
      throw new BadRequest("Verification has already been passed");
    }
    await sendEmail(email, user.verifyToken);
  };

  module.exports = { userSendEmailAgain }