const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middlewares");
const { operations: ctrl } = require("../../controllers");

router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.get("/daytransactions", auth, ctrlWrapper(ctrl.getAllDayTransacthios));
router.post("/", auth, ctrlWrapper(ctrl.addTransaction));
router.delete("/:operationId", auth, ctrlWrapper(ctrl.removeOperation));

module.exports = router;
