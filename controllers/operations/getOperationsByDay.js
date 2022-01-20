const { Operation } = require('../../models');

getOperationsByDay = async (req, res) => {
  const { year, month, day, type } = req.query;
  const { id } = req.user;

  const date = `${day}.${month}.${year}`;
  const filter = { owner: id, date, type };
  const unnecessaryFields = {
    createdAt: 0,
    updatedAt: 0,
    day: 0,
    month: 0,
    year: 0,
    owner: 0,
  };

  const operationsByDay = await Operation.find(filter, unnecessaryFields);

  res.status(201).json({
    status: 'Ok',
    code: 201,
    data: {
      operations: {
        [type]: operationsByDay,
      },
    },
  });
};

module.exports = getOperationsByDay;
