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
  subject: `${name} from your portfolio`,
  text: `${message} Reach me at ${email}`,
  html: `<strong>${message} Reach me at ${email}</strong>`,
};
(async () => {
  try {
    await sgMail.send(msg);
    console.log('email sent', msg)
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