const { User } = require('../../models/user');
const gravatar = require('gravatar');
const { Conflict, Unauthorized } = require('http-errors');
const { v4: uuidv4 } = require('uuid');
const { sendEmail } = require('../../helpers');

const registration = async (name, email, password) => {
  const userExist = await User.findOne({ email });
  if (userExist && userExist.verify) {
    throw new Conflict(`User with this email is already exist.`);
  }
  if (userExist && !userExist.verify) {
    const verifyToken = uuidv4(email);
    await sendEmail(email, verifyToken);
    throw new Unauthorized(`Your account already exists. A follow-up email has been sent to you to verify your email.`);
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
