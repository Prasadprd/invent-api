const express = require('express');
const User = require('../models/User');

const router = new express.Router();

router.post('/user', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/user/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/user/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => req.token !== token.token);
    await req.user.save();
  } catch (e) {
    res.status(500).send();
  }
});

// router.post()

module.exports = router;
