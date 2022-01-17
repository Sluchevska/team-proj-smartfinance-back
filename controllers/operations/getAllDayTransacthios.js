const { Operation } = require("../../models");

getAllDayTransacthios = async (req, res) => {
  const { date } = req.query;
  const { id } = req.user;

  const transactions = await Operation.find({ owner: id, date });

  if (transactions.length === 0) {
    res.status(404).json({
      status: "Not found",
      code: 404,
    });

    return;
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: transactions,
  });
};

module.exports = getAllDayTransacthios;
