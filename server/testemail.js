const nodemailer = require('nodemailer');

async function testMailSender() {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'iyadavharsh261@gmail.com', // your Gmail account
        pass: 'dcedjnxwuoyjbkmk', // your Gmail password or app password
      },
    });

    let info = await transporter.sendMail({
      from: '"Test Sender" <iyadavharsh261@gmail.com>', // sender address
      to: 'harsh261.career@gmail.com', // list of receivers
      subject: 'Hello', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

testMailSender();
