const { getCurrent } = require('../../services/users');

const userGetCurrent = async (req, res) => {
  const { id } = req.user;
  const { name, email, token, avatar } = await getCurrent(id);

  res.status(200).json({
    status: 'Ok',
    code: 200,
    data: {
      user: { name, email, avatar },
      token,
    },
  });
};

module.exports = { userGetCurrent };
