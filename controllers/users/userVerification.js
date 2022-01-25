const { verificationByToken } = require('../../services/users');

const userVerification = async (req, res) => {
  const { verificationToken } = req.params;
  const { token } = await verificationByToken(verificationToken);
  res.redirect(`https://team-proj-smartfinance.netlify.app/home?verify=true&access_token=${token}`);
};

module.exports = { userVerification };
