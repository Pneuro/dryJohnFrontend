const nodemailer = require("nodemailer");
export default function handlebar(req, res) {
  console.log("Request", req.body[1]);

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${req.body[1]}`, // sender address
      to: process.env.MAIL_USER, // list of receivers
      subject: `Message from dry-john.com - ${req.body[0]}`, // Subject line
      text: `Hello from ${req.body[0]}, \n \n ${req.body[3]}\n \n Phone number ${req.body[2]}\n\n Email: ${req.body[1]}`, // plain text body
      html: `<h1>Hello from ${req.body[0]}</h1> \n \n <p>${req.body[3]}</p>\n \n <p>
      Phone number ${req.body[2]}\
      </p>
      <p>
      \n Email: ${req.body[1]}
      </p>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
}
