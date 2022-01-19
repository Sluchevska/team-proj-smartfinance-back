const { Operation } = require('../../models');
const { getArrSixMonth } = require('../../helpers');

const getSixMonths = async (req, res) => {
  const { _id } = req.user;
  const { type } = req.query;

  const arrPromisesMonthlyData = getArrSixMonth().map(async ({ month, year }) => {
    const [monthTotal] = await Operation.aggregate([
      { $match: { month, year, type, owner: _id } },
      { $group: { _id: { type: '$type', month: '$month', year: '$year' }, total: { $sum: '$sum' } } },
      {
        $project: { _id: 0, year: '$_id.year', month: '$_id.month', total: '$total' },
      },
    ]);

    if (!monthTotal) return { year, month, total: 0 };

    return monthTotal;
  });

  let MonthlyData = null;
  await Promise.all(arrPromisesMonthlyData).then((data) => {
    MonthlyData = data;
  });

  res.status(200).json({
    status: 'Ok',
    code: 200,
    data: { type, MonthlyData },
  });
};

module.exports = getSixMonths;
