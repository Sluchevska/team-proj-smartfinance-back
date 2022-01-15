const { registration } = require('../../services/users') 

const userRegistration = async (req, res) => {
    const { email, password } = req.body;
    await registration(email, password);
    res.status(201).json({
      status: "Created",
      code: 201,
      data: {
        user: { email},
      },
    });
  };

  module.exports = {userRegistration};