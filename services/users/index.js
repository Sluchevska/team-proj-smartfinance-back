const {registration} = require('./registration')
const {login} = require('./login')
const {getCurrent} = require('./getCurrent')
const {logout} = require('./logout')
const {addToken} = require('./addToken')
const {deleteUser} = require('./deleteUser')
const {updateAvatar} = require('./updateAvatar')
const {verificationByToken} = require('./verificationByToken')
const {userSendEmailAgain} = require('./userSendEmailAgain')

module.exports = {
    registration,
    login,
    getCurrent,
    logout,
    addToken,
    deleteUser,
    updateAvatar,
    verificationByToken,
    userSendEmailAgain,
  };