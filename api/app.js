const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser);

app.post("/contact", async (req, res) => {

});

app.get("/ping", (req, res) => {
    res.send("pong")
})

app.listen(port, () => {
    console.log("Server is listening on port", port);
})

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'jeffrey.kingsbury@icloud.com', // Change to your recipient
  from: 'noreply@lyhfdy52.mywhc.ca', // Change to your verified sender
  subject: 'A new contact request from: LHDT',
  text: 'New contact request from' + " LHDT",
  html: `<strong>From Jeffrey Kingsbury</strong>
            <p>Website Origin: LHDT</p>
            <p>Email: jeffrey.kingsbury@icloud.com</p>
            <p>Tel: 4506940951</p>
            <p>Message: This is a test.</p>
  `,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })