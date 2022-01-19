const getAllInfo = require('./getAllInfo');
const getSixMonths = require('./getSixMonths');
const setBalance = require('./setBalance');
const addOperation = require('./addOperation');
const removeOperation = require('./removeOperation');
const getOperationsByDay = require('./getOperationsByDay');

const getIncomeExpenseByMonth = require('./getIncomeExpenseByMonth');
// const getExpenseByMonth = require('./getExpenseByMonth');

module.exports = {
  getAllInfo,
  getSixMonths,
  setBalance,
  addOperation,
  removeOperation,
  getOperationsByDay,
  getIncomeExpenseByMonth,
  // getExpenseByMonth,
};
