const { getCurrent } = require('../../services/users') 

const userGetCurrent = async (req, res) => {
    const { id } = req.user;
    const user = await getCurrent(id);
    const { email} = user;
    res.status(200).json({
      status: "Ok",
      code: 200,
      data: {
        user: { email},
      },
    });
  };

  module.exports = { userGetCurrent }