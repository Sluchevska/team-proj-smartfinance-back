const { updateAvatar } = require('../../services/users')

const userAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { id } = req.user;
    const result = await updateAvatar(id, tempUpload, originalname);
    const { avatarURL } = result;
    res.status(200).json({ status: "Ok", code: 200, data: { avatarURL } });
  };

  module.exports = { userAvatar }