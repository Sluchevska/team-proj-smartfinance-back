const express = require("express");
const router = new express.Router();

const { ctrlWrapper } = require('../../middlewares')
const { upload } = require("../../middlewares/upload");

const {
  userRegistration,
  userLogin,
  userGetCurrent,
  userLogOut,
  userDelete,
  userAvatar,
  userVerification,
  userSendSecondEmail,
} = require("../../controllers/users");

const {
  registrationValidator,
  loginValidator,
  verificationValidator,
} = require("../../middlewares/validation");
const { auth } = require("../../middlewares/auth");

router.post("/registration", registrationValidator, ctrlWrapper(userRegistration));
router.post("/login", loginValidator, ctrlWrapper(userLogin));
router.get("/current", auth, ctrlWrapper(userGetCurrent));
router.get("/logout", auth, ctrlWrapper(userLogOut));
router.delete("/:userId", auth, ctrlWrapper(userDelete));
router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(userAvatar));
router.get("/verify/:verificationToken", ctrlWrapper(userVerification));
router.post("/verify", verificationValidator, ctrlWrapper(userSendSecondEmail));

module.exports = router;