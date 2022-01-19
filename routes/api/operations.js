const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middlewares");
const { operations: ctrl } = require("../../controllers");

router.post("/balance", auth, ctrlWrapper(ctrl.submitBalance));
router.get("/info", auth, ctrlWrapper(ctrl.getAllInfo));
router.get("/byday", auth, ctrlWrapper(ctrl.getOperationsByDay));
router.post("/", auth, ctrlWrapper(ctrl.addOperation));
router.delete("/:operationId", auth, ctrlWrapper(ctrl.removeOperation));

module.exports = router;
