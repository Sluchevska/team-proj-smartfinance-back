const { Operation } = require("../../models");

getAllDayTransacthios = async (req, res) => {
  const { date } = req.query;
  const { id } = req.user;

  const transactionsIncome = await Operation.find({
    owner: id,
    date,
    type: "income",
  });
  const transactionsExpenses = await Operation.find({
    owner: id,
    date,
    type: "expenses",
  });

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      transactions: {
        income: transactionsIncome,
        expenses: transactionsExpenses,
      },
    },
  });
};

module.exports = getAllDayTransacthios;
