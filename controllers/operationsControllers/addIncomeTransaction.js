const { Operation } = require("../../models");

const addIncomeTransaction = async (req, res) => {
  const { date, category, description, type, sum, day, month, year } =
    req.query;

  const newIncome = {
    date,
    category,
    description,
    type,
    sum,
    day,
    month,
    year,
  };

  const result = Operation.create(newIncome);

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = addIncomeTransaction;
