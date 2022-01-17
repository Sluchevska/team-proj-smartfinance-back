const { verificationByToken } = require('../../services/users');

const userVerification = async (req, res) => {
  const { verificationToken } = req.params;
  await verificationByToken(verificationToken);
  res.redirect('https://team-proj-smartfinance.netlify.app');
};

module.exports = { userVerification };
