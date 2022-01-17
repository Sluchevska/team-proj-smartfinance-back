const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, BASE_URL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail, token) => {
  const email = {
    to: mail,
    from: 'alala1000500@gmail.com',
    subject: 'Регистрация в сервисе WiseMoney',
    html: `<a target="_blank" href="https://team-proj-smartfinance-back.herokuapp.com/api/users/verify/${token}">Подтвердить email</a>`,
  };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail };
