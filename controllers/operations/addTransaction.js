const { User } = require("../../models");
const { Operation } = require("../../models");

const addTransaction = async (req, res) => {
  const { date, category, description, type, sum } = req.body;
  const { id } = req.user;

  const [day, month, year] = date.split(".");

  const transaction = {
    date: { day, month, year },
    category,
    description,
    sum,
    type,
  };

  const { owner } = await Operation.create({ ...transaction, owner: id });
  const { balance: initialBalance } = await User.findById(id);

  let newBalance;

  switch (type) {
    case "income":
      newBalance = initialBalance + sum;
      break;

    case "expenses":
      newBalance = initialBalance - sum;
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
        balance: newBalance,
      },
    },
  });
};

module.exports = addTransaction;
