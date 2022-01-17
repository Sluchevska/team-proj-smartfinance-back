const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middlewares");
const { operations: ctrl } = require("../../controllers");

router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.post("/:firstBalance", ctrlWrapper(ctrl.submitBalance));
router.post("/", ctrlWrapper(ctrl.addTransaction));
router.delete("/:transactionId", ctrlWrapper(ctrl.removeTransaction));

module.exports = router;
