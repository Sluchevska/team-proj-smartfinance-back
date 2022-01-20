const { User } = require('../../models');

const getBalance = async (req, res) => {
  const { _id } = req.user;

  const [user] = await User.find({ _id }, { email: 1, balance: 1, _id: 0 });

  res.json({
    status: 'Ok',
    code: 200,
    data: { user },
  });
};

module.exports = getBalance;
