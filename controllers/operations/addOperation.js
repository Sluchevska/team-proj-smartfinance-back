const { User } = require('../../models');
const { Operation } = require('../../models');

const addOperation = async (req, res) => {
  const { date, category, description, sum, type } = req.body;
  const { id } = req.user;

  const [day, month, year] = date.split('.');

  const operation = {
    date,
    day,
    month,
    year,
    category,
    description,
    type,
    sum,
  };

  const { _id: operationId, sum: sumOper } = await Operation.create({
    ...operation,
    owner: id,
  });
  const { balance: initialBalance } = await User.findById(id);

  let newBalance;

  switch (type) {
    case 'income':
      newBalance = initialBalance + sumOper;
      break;

    case 'expenses':
      newBalance = initialBalance - sumOper;
      break;

    default:
  }

  await User.findByIdAndUpdate(id, { balance: newBalance }, { new: true });

  res.status(201).json({
    status: 'Ok',
    code: 201,
    data: {
      operation: {
        _id: operationId,
        date,
        category,
        description,
        sum: sumOper,
        type,
      },
      balance: newBalance,
    },
  });
};

module.exports = addOperation;
