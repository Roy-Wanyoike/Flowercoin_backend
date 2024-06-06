const express = require('express');
const router = express.Router();
const passport = require('passport');
const { processApplePay, processGooglePay, processMpesaPayment } = require('../services/payments');

// Apple Pay endpoint
router.post('/apple-pay', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const result = await processApplePay(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send('Apple Pay transaction failed');
  }
});

// Google Pay endpoint
router.post('/google-pay', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const result = await processGooglePay(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send('Google Pay transaction failed');
  }
});

// M-Pesa endpoint
router.post('/mpesa', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const result = await processMpesaPayment(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).send('M-Pesa transaction failed');
  }
});

module.exports = router;
