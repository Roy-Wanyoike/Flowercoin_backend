const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const client = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

const sendEmailNotification = async (to, subject, text) => {
  await transporter.sendMail({
    from: 'your-email@gmail.com',
    to,
    subject,
    text,
  });
};

const sendSmsNotification = async (to, message) => {
  await client.messages.create({
    body: message,
    from: 'your-twilio-number',
    to,
  });
};

module.exports = { sendEmailNotification, sendSmsNotification };
