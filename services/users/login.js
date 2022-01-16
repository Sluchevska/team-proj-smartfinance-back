const { User } = require("../../models/user");
const { Unauthorized, NotFound } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFound(`User with email ${email} not found`);
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Unauthorized("Email or password is wrong, try again");
    }
    if (!user.verify) {
      throw new Unauthorized(
        "Email is not verificated, check your email and verify it"
      );
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );
    await User.findOneAndUpdate(email, { token });
    return token;
  };

  module.exports = { login }