// const { MonthValues } = require('../../models/monthValues');

// const getExpenseByMonth = async (req, res, next) => {
//     try {
//         const expenseByMonth = await MonthValues.aggregate([
//             { $match: { isIncome: false, owner: req.user._id } },
//             {
//                 $group: {
//                     _id: {
//                         month: { $month: '$date' },
//                         year: { $year: '$date' },
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
//             expenseByMonth,
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// module.exports = getExpenseByMonth;