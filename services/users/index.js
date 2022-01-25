const { registration } = require('./registration');
const { login } = require('./login');
const { getCurrent } = require('./getCurrent');
const { logout } = require('./logout');
const { addToken } = require('./addToken');
const { verificationByToken } = require('./verificationByToken');

module.exports = {
  registration,
  login,
  getCurrent,
  logout,
  addToken,
  verificationByToken,
};
