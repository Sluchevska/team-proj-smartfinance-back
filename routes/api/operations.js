const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middlewares");
const { operations: ctrl } = require("../../controllers");

router.post("/balance", auth, ctrlWrapper(ctrl.setBalance));
router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.get("/byday", auth, ctrlWrapper(ctrl.getOperationsByDay));
router.post("/", auth, ctrlWrapper(ctrl.addOperation));
router.delete("/:operationId", auth, ctrlWrapper(ctrl.removeOperation));
router.get("/getExpenseByMonth", auth, ctrlWrapper(ctrl.getExpenseByMonth));
router.get("/", auth, ctrlWrapper(ctrl.getIncomeExpenseByMonth));

module.exports = router;
