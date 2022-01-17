const { User } = require("../../models");
const { Operation } = require("../../models");

const removeTransaction = async (req, res) => {
  const { transactionId } = req.params;
  const { id } = req.user;

  const removedTransaction = await Operation.findByIdAndRemove(transactionId);
  const { balance } = await User.findById(id);

  if (!removedTransaction) {
    res.status(400).json({
      status: "error",
      code: 400,
      data: `There is now transaction with id = ${transactionId}`,
    });

    return;
  }

  let newBalance;

  switch (removedTransaction.type) {
    case "income":
      newBalance = balance - removedTransaction.sum;
      break;

    case "expenses":
      newBalance = balance + removedTransaction.sum;
      break;

    default:
  }

  await User.findByIdAndUpdate(id, { balance: newBalance }, { new: true });

  res.status(200).json({
    status: "Transaction removed",
    code: 200,
    data: {
      removedTransaction,
      newBalance,
    },
  });
};

module.exports = removeTransaction;
