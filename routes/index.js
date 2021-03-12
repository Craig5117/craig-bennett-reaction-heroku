const router = require('express').Router();
require('dotenv').config();
const sgMail = require('@sendgrid/mail');


router.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

router.post('/api/send_email', function(req, res) {
  res.set("Content-Type", "application/json");
const { name, email, message } = req.body;
  /* Send email here */
  
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'craig.bennett5117@gmail.com',
  from: 'craig.bennett5117@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

  res.send('{"message":"Email sent."}');
});

module.exports = router;