const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper } = require('../../middlewares');
const { operations: ctrl } = require('../../controllers');
const { tryCatchWrapper } = require('../../helpers');
const { googleAuth, googleRedirect } = require('../../controllers/users');

router.post('/balance', auth, ctrlWrapper(ctrl.setBalance));
router.get('/balance', auth, ctrlWrapper(ctrl.getBalance));
router.get('/info', auth, ctrlWrapper(ctrl.getAllInfo));
router.get('/bymonth', auth, ctrlWrapper(ctrl.getSixMonths));
router.get('/byday', auth, ctrlWrapper(ctrl.getOperationsByDay));
router.post('/', auth, ctrlWrapper(ctrl.addOperation));
router.delete('/:operationId', auth, ctrlWrapper(ctrl.removeOperation));

router.get('/google', tryCatchWrapper(googleAuth));
router.get('/google-redirect', tryCatchWrapper(googleRedirect));

module.exports = router;
