const { User } = require('../../models');

const setBalance = async (req, res) => {
  const { balance: initialBalance } = req.body;
  const { id, email } = req.user;

  const { balance } = await User.findById(id);

  if (balance !== null) {
    res.status(406).json({
      status: 'Not Acceptable',
      code: 406,
      data: {
        user: {
          email,
          balance,
        },
      },
    });

    return;
  }

  const { balance: newBalance } = await User.findByIdAndUpdate(id, { balance: initialBalance }, { new: true });

  res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      user: {
        email,
        balance: newBalance,
      },
    },
  });
};

module.exports = setBalance;
