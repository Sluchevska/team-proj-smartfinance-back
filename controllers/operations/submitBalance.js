const { User } = require("../../models");

const submitBalance = async (req, res) => {
  const { firstBalance } = req.params;
  const { id } = req.user;

  const { balance } = await User.findById(id);

  if (balance !== null) {
    res.status(406).json({
      status: "Not Acceptable",
      code: 406,
      data: balance,
    });
    // можно передать какие-то данные для фронта, чтобы модалка подтверждения баланса не рендерелась
  }

  const newBalance = await User.findByIdAndUpdate(
    id,
    { balance: firstBalance },
    { new: true }
  );

  res.status(201).json({
    status: "success",
    code: 201,
    data: newBalance,
  });
};

module.exports = submitBalance;
