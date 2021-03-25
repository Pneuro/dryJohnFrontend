const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(process.env.MAIL_API_KEY);
export default function handler(req, res) {
  const email = req.body.email;
  console.log(email);
  // Save to Database POSTGRES database saved currently in flask -
  // THEN remove all other necessity from FLASK.
  if (req.method === "POST") {
    const message = {
      to: "neurodesignagency@gmail.com",
      from: req.body.email,
      subject: req.body.body,
      text: req.body.body,
      html: `<h1>Hello from ${req.body.name}</h1>`,
    };
    res.status(200).json({ data: "Success" });
    sendGrid.send(message).then(() => {
      console.log("Email sent").catch((err) => {
        console.log(err);
      });
    });
  }
}
