const { verificationByToken } = require('../../services/users')

const userVerification = async (req, res) => {
    const { verificationToken } = req.params;
    await verificationByToken(verificationToken);
    res.status(200).json({ status: "Verification successful" });
  };

  module.exports = { userVerification }