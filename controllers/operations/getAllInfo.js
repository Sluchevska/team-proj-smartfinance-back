const { Operation } = require('../../models');
const { categoryIncome, categoryExpenses } = require('../../data/category');

const getAllInfo = async (req, res) => {
  const { _id } = req.user;
  const { month, year } = req.query;

  const filter = { month, year, owner: _id };

  const monthTotal = await Operation.aggregate([
    { $match: filter },
    { $group: { _id: { type: '$type' }, total: { $sum: '$sum' } } },
    {
      $project: { _id: 0, type: '$_id.type', total: '$total' },
    },
  ]);

  let totalIncome = null;
  let totalExpenses = null;

  monthTotal.map((item) => {
    if (item.type === 'income') {
      totalIncome = item.total;
    }
    if (item.type === 'expenses') {
      totalExpenses = item.total;
    }
  });

  const getArrayCategoryDataByType = async (type) => {
    const result = await Operation.aggregate([
      { $match: { ...filter, type } },
      { $group: { _id: { category: '$category' }, total: { $sum: '$sum' } } },
      { $sort: { total: -1 } },
      {
        $project: { _id: 0, category: '$_id.category', total: '$total' },
      },
    ]);
    return result;
  };

  let arrayCategoryIncome = null;
  await getArrayCategoryDataByType('income').then((data) => (arrayCategoryIncome = data));

  const CategoryIncome = categoryIncome.map((categoryFromArr) => {
    const categoryIndex = arrayCategoryIncome.findIndex((item) => item.category === categoryFromArr);
    if (categoryIndex === -1) return { category: categoryFromArr, total: 0 };
    return arrayCategoryIncome[categoryIndex];
  });

  let arrayCategoryExpenses = null;
  await getArrayCategoryDataByType('expenses').then((data) => (arrayCategoryExpenses = data));

  const CategoryExpenses = categoryExpenses.map((categoryFromArr) => {
    const categoryIndex = arrayCategoryExpenses.findIndex((item) => item.category === categoryFromArr);
    if (categoryIndex === -1) return { category: categoryFromArr, total: 0 };
    return arrayCategoryExpenses[categoryIndex];
  });

  const arrPromisesDescriptionIncome = categoryIncome.map(async (category) => {
    const descriptionData = await Operation.aggregate([
      { $match: { ...filter, category } },
      { $group: { _id: { description: '$description' }, total: { $sum: '$sum' } } },
      { $sort: { total: -1 } },
      {
        $project: { _id: 0, description: '$_id.description', total: '$total' },
      },
    ]);

    return { category, descriptionData };
  });

  let DescriptionIncome = null;
  await Promise.all(arrPromisesDescriptionIncome).then((data) => (DescriptionIncome = data));

  const arrPromisesDescriptionExpenses = categoryExpenses.map(async (category) => {
    const descriptionData = await Operation.aggregate([
      { $match: { ...filter, category } },
      { $group: { _id: { description: '$description' }, total: { $sum: '$sum' } } },
      { $sort: { total: -1 } },
      {
        $project: { _id: 0, description: '$_id.description', total: '$total' },
      },
    ]);

    return { category, descriptionData };
  });

  let DescriptionExpenses = null;
  await Promise.all(arrPromisesDescriptionExpenses).then((data) => (DescriptionExpenses = data));

  res.status(200).json({
    status: 'Ok',
    code: 200,
    data: { totalIncome, totalExpenses, CategoryIncome, CategoryExpenses, DescriptionIncome, DescriptionExpenses },
  });
};

module.exports = getAllInfo;
