const { User } = require("../../models");

const submitBalance = async (req, res) => {
  const { balance: initialBalance } = req.body;
  const { id, email } = req.user;

  const { balance } = await User.findById(id);

  if (balance !== null) {
    res.status(406).json({
      status: "Not Acceptable",
      code: 406,
      data: { balance },
    });

    return;
  }

  const {
    id: userId,
    email: userEmail,
    balance: newBalance,
  } = await User.findByIdAndUpdate(
    id,
    { balance: initialBalance },
    { new: true }
  );

  res.status(201).json({
    status: "Created",
    code: 201,
    data: {
      user: {
        id: userId,
        email: userEmail,
        balance: newBalance,
      },
    },
  });
};

module.exports = submitBalance;
