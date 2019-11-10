import NodeMailer from 'nodemailer'

const transporter = NodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jcelnitski@gmail.com',
      pass: process.env.GMAIL_PASSWORD
    }
});

function send (name, email, message) {
  
  const invitationEmail = function (name, email, message) {
    const text = `
      ${name} has sent you a message.
      Email: ${email}
      Message:\n
      ${message}
    `
      
    return {
      to: `${email}`,
      from: {
        address: fromEmail,
        name: `CONTACT REQUEST NOTIFIER`
      },
      subject: 'New Contact Form Submission',
      text
    }
  };

  transporter.sendMail(invitationEmail(name, email, message))
  
};