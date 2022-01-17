const express = require("express");
const router = express.Router();

const { operations: ctrl } = require("../../controllers");

router.post("/", ctrl.addTransaction);

router.delete("/:transactionId", ctrl.removeTransaction);

module.exports = router;
