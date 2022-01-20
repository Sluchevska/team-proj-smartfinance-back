const { registration } = require('../../services/users');

const userRegistration = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registration(name, email, password);
  res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
  });
};

module.exports = { userRegistration };
