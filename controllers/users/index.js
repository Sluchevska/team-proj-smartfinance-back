const userRegistration = require('./userRegistration')
const userLogin = require('./userLogin')
const userGetCurrent = require('./userGetCurrent')
const userLogOut = require('./userLogout')
const userDelete = require('./userDelete')
const userAvatar = require('./userAvatar')
const userVerification = require('./userVerification')
const userSendSecondEmail = require('./userSendSecondEmail')

module.exports = {
    userRegistration,
    userLogin,
    userGetCurrent,
    userLogOut,
    userDelete,
    userAvatar,
    userVerification,
    userSendSecondEmail,
  };