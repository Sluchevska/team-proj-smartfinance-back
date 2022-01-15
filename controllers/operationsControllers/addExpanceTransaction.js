const { Operation } = require("../../models");

const addExpanceTransaction = async (req, res) => {
  const { date, category, description, type, sum, day, month, year } =
    req.query;

  const newExpence = {
    date,
    category,
    description,
    type,
    sum,
    day,
    month,
    year,
  };

  const result = await Operation.create(newExpence);

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = addExpanceTransaction;
