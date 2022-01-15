const express = require("express");
const router = new express.Router();

const { upload } = require("../../middlewares/upload");
// const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

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

router.post("/signup", registrationValidator, userRegistration);
router.post("/login", loginValidator, userLogin);
router.get("/current", auth, userGetCurrent);
router.get("/logout", auth, userLogOut);
router.delete("/:userId", auth, userDelete);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  userAvatar
);
router.get("/verify/:verificationToken", userVerification);
router.post(
  "/verify",
  verificationValidator,
  userSendSecondEmail
);

module.exports = router;