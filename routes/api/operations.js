const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper } = require('../../middlewares');
const { operations: ctrl } = require('../../controllers');

router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.get("/daytransactions", auth, ctrlWrapper(ctrl.getAllDayTransacthios));
router.post("/balance", auth, ctrlWrapper(ctrl.submitBalance));
router.post("/", auth, ctrlWrapper(ctrl.addTransaction));
router.delete("/:transactionId", auth, ctrlWrapper(ctrl.removeTransaction));
router.get('/getExpenseByMonth', auth, ctrlWrapper(ctrl.getExpenseByMonth));
router.get('/', auth, ctrlWrapper(ctrl.getIncomeExpenseByMonth));

module.exports = router;
