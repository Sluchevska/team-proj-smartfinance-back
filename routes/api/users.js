const express = require('express');
const router = new express.Router();

const { tryCatchWrapper } = require('../../helpers');
const { googleAuth, googleRedirect } = require('../../controllers/users');

const { auth, ctrlWrapper, upload } = require('../../middlewares');

const {
  userRegistration,
  userLogin,
  userGetCurrent,
  userLogOut,
  userVerification,
} = require('../../controllers/users');

const { registrationValidator, loginValidator, verificationValidator } = require('../../middlewares/validation');

router.post('/register', registrationValidator, ctrlWrapper(userRegistration));
router.post('/login', loginValidator, ctrlWrapper(userLogin));
router.get('/logout', auth, ctrlWrapper(userLogOut));
router.get('/current', auth, ctrlWrapper(userGetCurrent));
router.get('/verify/:verificationToken', ctrlWrapper(userVerification));

router.get('/google', tryCatchWrapper(googleAuth));
router.get('/google-redirect', tryCatchWrapper(googleRedirect));

module.exports = router;
