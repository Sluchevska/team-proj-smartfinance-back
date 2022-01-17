const { logout } = require('../../services/users');

const userLogOut = async (req, res) => {
  const { id } = req.user;
  await logout(id);
  res.status(204).json();
};

module.exports = { userLogOut };
