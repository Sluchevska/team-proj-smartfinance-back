const { userSendEmailAgain } = require('../../services/users')

const userSendSecondEmail = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "missing required field email" });
    }
    await userSendEmailAgain(email);
    res.status(200).json({ status: "Verification email sent" });
  };

  module.exports = { userSendSecondEmail }