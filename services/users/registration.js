const { User } = require('../../models/user');
const gravatar = require('gravatar');
const { Conflict } = require('http-errors');
const { v4: uuidv4 } = require('uuid');
const { sendEmail } = require('../../helpers');

const registration = async (name, email, password) => {
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Conflict(`User with email ${email} is already exist`);
  }
  const avatarURL = gravatar.url(email, { protocol: 'https', s: '100' });
  const verifyToken = uuidv4(email);
  await sendEmail(email, verifyToken);
  const user = new User({
    name,
    email,
    password,
    avatarURL,
    verifyToken,
  });
  const newUser = await user.save();
  return newUser;
};

module.exports = { registration };
