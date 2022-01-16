const { Operation } = require('../../models');

const getAllInfo = async (req, res) => {
  // const { _id } = req.user;
  const { month, year } = req.query;

  const filter = { month, year };

  const result = await Operation.find();

  res.json(result);
};

module.exports = getAllInfo;

// Должен отдать в ответе:
// 1. Общий доход и расход за месяц
// 2. Доход и расход за месяц по каждой категории // или что-то одно в зависимости какая страница открыта(доход или расход)
// 3. Подробный отчет по выбранной категории для графика (description - описание какой товар)

//  доход / credit
//  расход / debit
