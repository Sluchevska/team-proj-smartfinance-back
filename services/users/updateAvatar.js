const { User } = require("../../models/user");
const fs = require("fs").promises;
const path = require("path");
const Jimp = require("jimp");

const updateAvatar = async (id, tempUpload, originalname) => {
    const newName = `${id}_${originalname}`;
    try {
      const resultUpload = path.join(
        __dirname,
        "../",
        "public",
        "avatars",
        newName
      );
      const file = await Jimp.read(tempUpload);
      await file.resize(250, 250).write(tempUpload);
      await fs.rename(tempUpload, resultUpload);
      const avatarURL = path.join("public", "avatars", newName);
      const result = await User.findByIdAndUpdate(id, { avatarURL });
      return result;
    } catch (error) {
      await fs.unlink(tempUpload);
      console.log(error.message);
    }
  };

  module.exports = { updateAvatar }