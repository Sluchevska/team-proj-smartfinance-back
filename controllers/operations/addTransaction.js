const { User } = require("../../models");
const { Operation } = require("../../models");

const addTransaction = async (req, res) => {
  const { date, category, description, type, sum, owner = "me" } = req.body;
  // const { id } = req.user;

  const [day, month, year] = date.split(".");

  const newTransaction = {
    date: { day, month, year },
    category,
    description,
    sum,
    type,
  };

  const result = await Operation.create(newTransaction);
  // const { balance = 1000 } = await User.findById(id);

  const balance = 110000;
  let newBalance;

  switch (type) {
    case "income":
      newBalance = balance + sum;
      break;

    case "expenses":
      newBalance = balance - sum;
      break;

    default:
  }

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
        newBalance,
      },
    },
  });
};

module.exports = addTransaction;
