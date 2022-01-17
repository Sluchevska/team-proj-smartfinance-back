const { Operation } = require("../../models");

const removeTransaction = async (req, res) => {
  const { transactionId } = req.params;

  const result = await Operation.findByIdAndRemove(transactionId);

  if (!result) {
    res.status(400).json({
      status: "error",
      code: 400,
      data: `There is now transaction with id = ${transactionId}`,
    });

    return;
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeTransaction;
