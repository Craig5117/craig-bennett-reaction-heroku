const router = require('express').Router();



router.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

router.post('/api/send_email', function(req, res) {
  res.set("Content-Type", "application/json");

  /* Send email here */

  res.send('{"message":"Email sent."}');
});

module.exports = router;