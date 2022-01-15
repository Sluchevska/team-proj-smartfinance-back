const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail, token) => {
  const email = {
    to: mail,
    from: "alala1000500@gmail.com",
    subject: "Регистрация в сервисе WiseMoney",
    html: `<a href="localhost:3000/api/users/verify/${token}">Для подтверждения регистрации перейдите по ссылке localhost:3000/api/users/verify/${token}</a>`,
  };
  try {
    await sgMail.send(email);
    console.log("Email send success");
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendEmail };