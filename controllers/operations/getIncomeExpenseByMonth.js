const { Operation } = require('../../models');


const getIncomeExpenseByMonth = async (req, res) => {
  const { _id } = req.user;
  const { month, year } = req.query;

  const userFilter = { month, year, owner: _id };
    
        const incomeByMonth = await Operation.aggregate([
            { $match: { ...userFilter, type: "income" } },
            { $group: { _id: { month: { $month: '$month' }, year: { $year: '$year' }}, total: { $sum: '$sum' } } },
            { $sort: {'_id.year': -1, '_id.month': -1 } },
        ]).limit(6);
                
        // res.status(200).json({
        //     incomeByMonth,
        // });
        const expenseByMonth = await Operation.aggregate([
            { $match: { ...userFilter, type: "expense" } },
            { $group: { _id: { month: { $month: '$month' }, year: { $year: '$year' } }, total: { $sum: '$sum' } } },
            { $sort: {'_id.year': -1, '_id.month': -1 } },
        ]).limit(6);
                
        // res.status(200).json({
        //     expenseByMonth,
        // });
        
    res.status(200).json({
    status: 'Ok',
    code: 200,
    data: { incomeByMonth, expenseByMonth },
  });
};

module.exports = getIncomeExpenseByMonth;



// const { Operation } = require('../../models');

// const getIncomeExpenseByMonth = async (req, res, next) => {
//     // const { _id } = req.user
//     try {
//         const incomeExpenseByMonth = await Operation.aggregate([
//             { $match: { type: {enum: ["income", "expenses"]}, owner: req.user._id } },
//             {
//                 $group: {
//                     _id: {
//                         month: { $month: '$month' },
//                         year: { $year: '$year' },
//                     },
//                     total: { $sum: '$sum' },
//                 },
//             },
//             {
//                 $sort: {
//                     '_id.year': -1,
//                     '_id.month': -1,
//                 },
//             },
//         ]).limit(6);
        
//         res.status(200).json({
//             incomeExpenseByMonth,
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// module.exports = getIncomeExpenseByMonth;