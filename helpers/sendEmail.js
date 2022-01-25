const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, EMAIL_FOR_SENDING_LETTERS } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail, token) => {
  const email = {
    to: mail,
    from: `${EMAIL_FOR_SENDING_LETTERS}`,
    subject: 'Регистрация в сервисе Kapusta',
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
