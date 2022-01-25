const { registration } = require('./registration');
const { login } = require('./login');
const { getCurrent } = require('./getCurrent');
const { logout } = require('./logout');
const { addToken } = require('./addToken');
const { updateAvatar } = require('./updateAvatar');
const { verificationByToken } = require('./verificationByToken');

module.exports = {
  registration,
  login,
  getCurrent,
  logout,
  addToken,
  updateAvatar,
  verificationByToken,
};
