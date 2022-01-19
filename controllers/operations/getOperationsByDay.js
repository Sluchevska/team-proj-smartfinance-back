const { Operation } = require("../../models");

getOperationsByDay = async (req, res) => {
  const { year, month, day } = req.query;
  const { id } = req.user;

  const date = `${day}.${month}.${year}`;

  const operationsIncome = await Operation.find({
    owner: id,
    date,
    type: "income",
  });
  const operationsExpenses = await Operation.find({
    owner: id,
    date,
    type: "expenses",
  });

  res.status(201).json({
    status: "Ok",
    code: 201,
    data: {
      operations: {
        income: operationsIncome,
        expenses: operationsExpenses,
      },
    },
  });
};

module.exports = getOperationsByDay;
