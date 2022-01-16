const { login, addToken } = require('../../services/users')

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const token = await login(email, password);
    await addToken(email, token);
    res.status(200).json({
      status: "Ok",
      code: 200,
      data: {
        user: { email, token },
      },
    });
  };
 
  module.exports = {userLogin};