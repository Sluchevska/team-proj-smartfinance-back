const { userRegistration } = require('./userRegistration');
const { userLogin } = require('./userLogin');
const { userGetCurrent } = require('./userGetCurrent');
const { userLogOut } = require('./userLogout');
const { userVerification } = require('./userVerification');
const { googleAuth, googleRedirect } = require('./google');

module.exports = {
  userRegistration,
  userLogin,
  userGetCurrent,
  userLogOut,
  userVerification,
  googleAuth,
  googleRedirect,
};
