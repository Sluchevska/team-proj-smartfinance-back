const { Operation } = require('../../models');
const { categoryIncome, categoryExpenses } = require('./category');

const getAllInfo = async (req, res) => {
  const { _id } = req.user;
  const { month, year } = req.query;

  const filter = { month, year, owner: _id };

  const totalIncome = (await Operation.find({ ...filter, type: 'income' }, { sum: 1, _id: 0 })).reduce(
    (acc, { sum }) => acc + sum,
    0
  );

  const totalExpenses = (await Operation.find({ ...filter, type: 'expenses' }, { sum: 1, _id: 0 })).reduce(
    (acc, { sum }) => acc + sum,
    0
  );

  const arrPromisesCategoryExpenses = categoryExpenses.map(async (category) => {
    const total = (await Operation.find({ ...filter, category }, { sum: 1, _id: 0 })).reduce(
      (acc, { sum }) => acc + sum,
      0
    );
    return { category, total };
  });

  let CategoryExpenses = null;
  await Promise.all(arrPromisesCategoryExpenses).then((data) => (CategoryExpenses = data));

  const arrPromisesCategoryIncome = categoryIncome.map(async (category) => {
    const total = (await Operation.find({ ...filter, category }, { sum: 1, _id: 0 })).reduce(
      (acc, { sum }) => acc + sum,
      0
    );
    return { category, total };
  });

  let CategoryIncome = null;
  await Promise.all(arrPromisesCategoryIncome).then((data) => (CategoryIncome = data));

  const arrPromisesDescriptionExpenses = categoryExpenses.map(async (category) => {
    const descriptionArrey = await Operation.find({ ...filter, category }).distinct('description');

    const descriptionDataPromises = descriptionArrey.map(async (description) => {
      const total = (await Operation.find({ ...filter, description }, { sum: 1, _id: 0 })).reduce(
        (acc, { sum }) => acc + sum,
        0
      );
      return { description, total };
    });

    let descriptionData = null;
    await Promise.all(descriptionDataPromises).then((data) => (descriptionData = data));

    return { category, descriptionData };
  });

  let DescriptionExpenses = null;
  await Promise.all(arrPromisesDescriptionExpenses).then((data) => (DescriptionExpenses = data));

  // ----------------------
  const arrPromisesDescriptionIncome = categoryIncome.map(async (category) => {
    const descriptionArrey = await Operation.find({ ...filter, category }).distinct('description');

    const descriptionDataPromises = descriptionArrey.map(async (description) => {
      const total = (await Operation.find({ ...filter, description }, { sum: 1, _id: 0 })).reduce(
        (acc, { sum }) => acc + sum,
        0
      );
      return { description, total };
    });

    let descriptionData = null;
    await Promise.all(descriptionDataPromises).then((data) => (descriptionData = data));

    return { category, descriptionData };
  });

  let DescriptionIncome = null;
  await Promise.all(arrPromisesDescriptionIncome).then((data) => (DescriptionIncome = data));

  // -------------------------

  const data = { totalIncome, totalExpenses, CategoryExpenses, CategoryIncome, DescriptionExpenses, DescriptionIncome };

  res.json(data);
};

module.exports = getAllInfo;

// Должен отдать в ответе:
// 1. Общий доход и расход за месяц
// 2. Доход и расход за месяц по каждой категории
// 3. Подробный отчет по выбранной категории для графика (description - описание какой товар)

//  доход / income
//  расход / expenses

// income by category - масив в котором {name:"Продукты", total:1500}
//
// expenses by category - -//-

// ------------
// totalIncome
// totalExpenses

// CategoryIncome
// CategoryExpenses

// DescriptionIncome
// DescriptionExpenses
