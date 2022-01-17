const { Operation } = require("../../models");

const addTransaction = async (req, res) => {
  console.log(req.user);
  const { date, category, description, sum, type, owner = "me" } = req.body;

  const newTransaction = { date, category, description, sum, type, owner };

  const result = await Operation.create(newTransaction);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      transaction: {
        date,
        category,
        description,
        sum,
        type,
        owner,
      },
    },
  });
};

module.exports = addTransaction;
