const getAllInfo = require("./getAllInfo");
const setBalance = require("./setBalance");
const addOperation = require("./addOperation");
const removeOperation = require("./removeOperation");
const getOperationsByDay = require("./getOperationsByDay");

const getIncomeExpenseByMonth = require("./getIncomeExpenseByMonth");
// const getExpenseByMonth = require('./getExpenseByMonth');

module.exports = {
  getAllInfo,
  setBalance,
  addOperation,
  removeOperation,
  getOperationsByDay,
  getIncomeExpenseByMonth,
  // getExpenseByMonth,
};
