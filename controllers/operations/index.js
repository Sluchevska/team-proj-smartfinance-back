const getAllInfo = require("./getAllInfo");
const submitBalance = require("./submitBalance");
const addOperation = require("./addOperation");
const removeOperation = require("./removeOperation");
const getOperationsByDay = require("./getOperationsByDay");

const getIncomeExpenseByMonth = require('./getIncomeExpenseByMonth');
// const getExpenseByMonth = require('./getExpenseByMonth');

module.exports = {
  getAllInfo,
  submitBalance,
  addOperation,
  removeOperation,
  getOperationsByDay,
  getIncomeExpenseByMonth,
  // getExpenseByMonth,
};
