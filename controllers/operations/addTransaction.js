const { User } = require("../../models");
const { Operation } = require("../../models");

const addTransaction = async (req, res) => {
  const { date, category, description, type, sum, owner = "me" } = req.body;
  const { id } = req.user;

  const [day, month, year] = date.split(".");

  const transaction = {
    date: { day, month, year },
    category,
    description,
    sum,
    type,
  };

  await Operation.create(transaction);
  const { balance } = await User.findById(id);

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

  await User.findByIdAndUpdate(id, { balance: newBalance }, { new: true });

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
