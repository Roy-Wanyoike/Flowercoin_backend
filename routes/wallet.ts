const express = require('express');
const router = express.Router();
const passport = require('passport');
const Wallet = require('../models/Wallet');

// Get wallet balance
router.get('/balance', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json(wallet);
  } catch (error) {
    res.status(400).send('Error fetching wallet balance');
  }
});

// Transaction history
router.get('/transactions', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(400).send('Error fetching transaction history');
  }
});

module.exports = router;
