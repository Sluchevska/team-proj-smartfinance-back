const { User } = require("../../models/user");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const registration = async (email, password) => {
    const userExist = await User.findOne({ email });
    const avatarURL = gravatar.url(email, { protocol: "https", s: "100" });
    if (userExist) {
      throw new Conflict(`User with email ${email} is already exist`);
    }
    const verifyToken = uuidv4(email);
    await sendEmail(email, verifyToken);
    const user = new User({
      email,
      password,
      avatarURL,
      verifyToken,
      verify: false,
    });
    await user.save();
  };
  
  module.exports = { registration }