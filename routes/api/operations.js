const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper } = require('../../middlewares');
const { operations: ctrl } = require('../../controllers');

router.get('/info', auth, ctrlWrapper(ctrl.getAllInfo));

module.exports = router;
