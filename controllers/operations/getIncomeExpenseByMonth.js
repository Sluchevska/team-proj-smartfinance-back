const { Operation } = require('../../models');

const getIncomeByMonth = async (req, res, next) => {
    // const { _id } = req.user
    try {
        const incomeByMonth = await Operation.aggregate([
            { $match: { type: {enum: ["income", "expenses"]}, owner: req.user._id } },
            {
                $group: {
                    _id: {
                        month: { $month: '$month' },
                        year: { $year: '$year' },
                    },
                    total: { $sum: '$sum' },
                },
            },
            {
                $sort: {
                    '_id.year': -1,
                    '_id.month': -1,
                },
            },
        ]).limit(6);
        
        res.status(200).json({
            incomeByMonth,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = getIncomeByMonth;