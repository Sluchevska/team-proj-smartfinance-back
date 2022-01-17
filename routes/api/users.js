const express = require('express');
const router = new express.Router();

const { ctrlWrapper } = require('../../middlewares');
const { upload } = require('../../middlewares');

const {
  userRegistration,
  userLogin,
  userGetCurrent,
  userLogOut,
  userDelete,
  userAvatar,
  userVerification,
  userSendSecondEmail,
} = require('../../controllers/users');

const { registrationValidator, loginValidator, verificationValidator } = require('../../middlewares/validation');
const { auth } = require('../../middlewares');

router.post('/register', registrationValidator, ctrlWrapper(userRegistration));
router.post('/login', loginValidator, ctrlWrapper(userLogin));
router.get('/logout', auth, ctrlWrapper(userLogOut));
router.get('/verify/:verificationToken', ctrlWrapper(userVerification));
router.post('/verify', verificationValidator, ctrlWrapper(userSendSecondEmail));

// не нужные энд-поинты
router.get('/current', auth, ctrlWrapper(userGetCurrent));
router.delete('/:userId', auth, ctrlWrapper(userDelete));
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(userAvatar));
//

module.exports = router;
