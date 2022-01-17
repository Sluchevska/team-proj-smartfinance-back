const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require('../../middlewares');
const { operations: ctrl } = require('../../controllers');

router.get('/info', auth, ctrlWrapper(ctrl.getAllInfo));

const { operations: ctrl } = require("../../controllers");

router.post("/", ctrl.addTransaction);

router.delete("/:transactionId", ctrl.removeTransaction);

module.exports = router;
