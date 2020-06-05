const nodemailer = require('nodemailer');

module.exports = {
  async sendMailRegister(payload) {
    const config = {
      service: 'gmail',
      auth: {
        user: 'rayhannabhanlukmansyah@gmail.com',
        pass: 'Id yang @sli',
      },
    };

    const transporter = await nodemailer.createTransport(config);
    const mail = {
      to: payload.email,
      from: 'rayhannabhanlukmansyah@gmail.com',
      subject: '[Node Email] - Success Registration',
      html: `<h4>Your Account Has Been Registered!</h4>`,
    };
    transporter.sendMail(mail);
  },
};
