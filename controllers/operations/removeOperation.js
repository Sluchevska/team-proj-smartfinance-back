const { User } = require("../../models");
const { Operation } = require("../../models");

const removeOperation = async (req, res) => {
  const { operationId } = req.params;
  const { id } = req.user;

  const removedOperation = await Operation.findByIdAndRemove(operationId);
  const { balance } = await User.findById(id);

  if (!removedOperation) {
    res.status(400).json({
      status: "error",
      code: 400,
      data: `There is now operation with id = ${operationId}`,
    });

    return;
  }

  let newBalance;

  switch (removedOperation.type) {
    case "income":
      newBalance = balance - removedOperation.sum;
      break;

    case "expenses":
      newBalance = balance + removedOperation.sum;
      break;

    default:
  }

  await User.findByIdAndUpdate(id, { balance: newBalance }, { new: true });

  res.status(200).json({
    message: "Operation deleted",
    balance: newBalance,
  });
};

module.exports = removeOperation;
