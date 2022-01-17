const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middlewares");
const { operations: ctrl } = require("../../controllers");

router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.post("/balance", auth, ctrlWrapper(ctrl.submitBalance));
router.post("/", auth, ctrlWrapper(ctrl.addTransaction));
router.delete("/:transactionId", auth, ctrlWrapper(ctrl.removeTransaction));

module.exports = router;
